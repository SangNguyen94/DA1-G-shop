import { check }             from 'meteor/check';
import { Meteor }            from 'meteor/meteor';
import { _app, Collections } from '/imports/lib/core.js';
import { UserFiles } from '../ui/FileUpload';
 Meteor.startup(()=>{
  const db='{ "dropbox": {  "key": "ycb8zljcmmjrkuk","secret": "f0g7ftxca1q68qe","token": "vqj9PSWbrOAAAAAAAAAAF1PhKlyhzuG1CmKxEOK1plRSM3UlIgt2_mIZNZVuURJV"} }';
  process.env.DROPBOX=JSON.parse('{"dropbox": {"key": "ycb8zljcmmjrkuk","secret": "f0g7ftxca1q68qe","token": "vqj9PSWbrOAAAAAAAAAAFTNO1lRmwN5z3dVqWFZG7ums-JX7abjoDE4FuWzPNjQ6" }}');
    
  });

Meteor.methods({
  filesLenght(userOnly = false) {
    check(userOnly, Boolean);

    let selector;
    if (userOnly && this.userId) {
      selector = {
        userId: this.userId
      };
    } else if (this.userId) {
      selector = {
        $or: [
          {
            'meta.unlisted': false,
            'meta.secured': false,
            'meta.blamed': {
              $lt: 3
            }
          }, {
            userId: this.userId,
            'meta.blamed': {
              $lt: 3
            }
          }
        ]
      };
    } else {
      selector = {
        'meta.unlisted': false,
        'meta.secured': false,
        'meta.blamed': {
          $lt: 3
        }
      };
    }
    return Collections.files.find(selector).count();
  },
  unblame(_id) {
    check(_id, String);
    Collections.files.update({
      _id: _id
    }, {
      $inc: {
        'meta.blamed': -1
      }
    }, _app.NOOP);
    return true;
  },
  blame(_id) {
    check(_id, String);
    Collections.files.update({
      _id: _id
    }, {
      $inc: {
        'meta.blamed': 1
      }
    }, _app.NOOP);
    return true;
  },
  changeAccess(_id) {
    check(_id, String);
    if (Meteor.userId()) {
      const file = Collections.files.findOne({
        _id: _id,
        userId: Meteor.userId()
      });

      if (file) {
        Collections.files.update(_id, {
          $set: {
            'meta.unlisted': file.meta.unlisted ? false : true
          }
        }, _app.NOOP);
        return true;
      }
    }
    throw new Meteor.Error(401, 'Access denied!');
  },
  changePrivacy(_id) {
    check(_id, String);
    if (Meteor.userId()) {
      const file = Collections.files.findOne({
        _id: _id,
        userId: Meteor.userId()
      });

      if (file) {
        Collections.files.update(_id, {
          $set: {
            'meta.unlisted': true,
            'meta.secured': file.meta.secured ? false : true
          }
        }, _app.NOOP);
        return true;
      }
    }
    throw new Meteor.Error(401, 'Access denied!');
  },
  getServiceConfiguration() {
    return _app.sc;
  },
  RemoveFile(id)
  {
    const file=UserFiles.findOne({
      _id:id,
      userId: Meteor.userId()
    });
    if(file)
    {
      UserFiles.remove({
        '_id':id
      },_app.NOOP);
    }
    return true;
  },
  RenameFile(id,name)
  {
    const file=UserFiles.findOne({
      _id:id,
      userId: Meteor.userId()
    });
    if (file) {
      UserFiles.update(id, {
        $set: {
          'name': name,
        }
      }, _app.NOOP);
      return true;
    }
  }
});
var foo = process.env.DROPBOX;
if (typeof(foo) !== 'undefined') {
  // FOO environment variables exists
  
  console.log("Dropbox OK");
}

