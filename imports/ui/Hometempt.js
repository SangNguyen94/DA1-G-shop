import React from 'react';
import {Meteor } from 'meteor/meteor'

import { Router,Route,Link } from 'react-router';
import styled from 'styled-components';

const StyledLink= styled(Link)`
  background-color: #3a8bcd;
  border-radius: 5px;
    padding: 10px 15px;
  display: inline-block;
  color: #fff;
  font-size: 10px;
    text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.4px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover{
    opacity: 0.7;
  }
 `;
export default () => {
 

  return (
  <div id="header">
    <meta charSet="utf-8"/>
	<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	

	<title>E-SHOP HTML Template</title>

	
	<link href="https://fonts.googleapis.com/css?family=Hind:400,700" rel="stylesheet"/>

	
	<link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />

	
	<link type="text/css" rel="stylesheet" href="/css/slick.css" />
	<link type="text/css" rel="stylesheet" href="/css/slick-theme.css" />

	
	<link type="text/css" rel="stylesheet" href="/css/nouislider.min.css" />

	
	<link rel="stylesheet" href="/css/font-awesome.min.css"/>

	
	<link type="text/css" rel="stylesheet" href="/css/style.css" />

	<script type="text/babel" src="%PUBLIC_URL%/js/jquery.min.js"></script>
	<script type="text/babel" src="%PUBLIC_URL%/js/bootstrap.min.js"></script>
	<script type="text/babel"src="%PUBLIC_URL%/js/slick.min.js"></script>
	<script type="text/babel" src="%PUBLIC_URL%/js/nouislider.min.js"></script>
	<script type="text/babel" src="%PUBLIC_URL%/js/jquery.zoom.min.js"></script>
	<script type="text/babel" src="%PUBLIC_URL%/js/main.js"></script>


<div id="body">
	
	<div>
		
		<div id="top-header">
			<div className="container">
				<div className="pull-left">
					<span>Welcome to E-shop!</span>
				</div>
				<div className="pull-right">
					<ul className="header-top-links">
						<li><a href="#">Store</a></li>
						<li><a href="#">Newsletter</a></li>
						<li><a href="#">FAQ</a></li>
						<li className="dropdown default-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down"></i></a>
							<ul className="custom-menu">
								<li><a href="#">English (ENG)</a></li>
								<li><a href="#">Russian (Ru)</a></li>
								<li><a href="#">French (FR)</a></li>
								<li><a href="#">Spanish (Es)</a></li>
							</ul>
						</li>
						<li className="dropdown default-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i className="fa fa-caret-down"></i></a>
							<ul className="custom-menu">
								<li><a href="#">USD ($)</a></li>
								<li><a href="#">EUR (€)</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	
		<div id="header">
			<div className="container">
				<div className="pull-left">
	
					<div className="header-logo">
						<a className="logo" href="#">
							<img src="/img/logo.png" alt=""/>
						</a>
					</div>
				
					<div className="header-search">
						<form>
							<input className="input search-input" type="text" placeholder="Enter your keyword"/>
							<select className="input search-categories">
								<option value="0">All Categories</option>
								<option value="1">Category 01</option>
								<option value="1">Category 02</option>
							</select>
							<button className="search-btn"><i className="fa fa-search"></i></button>
						</form>
					</div>

				</div>
				<div className="pull-right">
					<ul className="header-btns">

						<li className="header-account dropdown default-dropdown">
							<div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
								<div className="header-btns-icon">
									<i className="fa fa-user-o"></i>
								</div>
								<strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
							</div>
							<a href="#" className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
							<ul className="custom-menu">
								<li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
								<li><a href="#"><i className="fa fa-heart-o"></i> My Wishlist</a></li>
								<li><a href="#"><i className="fa fa-exchange"></i> Compare</a></li>
								<li><a href="#"><i className="fa fa-check"></i> Checkout</a></li>
								<li><a href="#"><i className="fa fa-unlock-alt"></i> Login</a></li>
								<li><a href="#"><i className="fa fa-user-plus"></i> Create An Account</a></li>
							</ul>
						</li>



						<li className="header-cart dropdown default-dropdown">
							<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
								<div className="header-btns-icon">
									<i className="fa fa-shopping-cart"></i>
									<span className="qty">3</span>
								</div>
								<strong className="text-uppercase">My Cart:</strong>
								<br/>
								<span>35.20$</span>
							</a>
							<div className="custom-menu">
								<div id="shopping-cart">
									<div className="shopping-cart-list">
										<div className="product product-widget">
											<div className="product-thumb">
												<img src="/img/thumb-product01.jpg" alt=""/>
											</div>
											<div className="product-body">
												<h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
												<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button className="cancel-btn"><i className="fa fa-trash"></i></button>
										</div>
										<div className="product product-widget">
											<div className="product-thumb">
												<img src="/img/thumb-product01.jpg" alt=""/>
											</div>
											<div className="product-body">
												<h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
												<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
											</div>
											<button className="cancel-btn"><i className="fa fa-trash"></i></button>
										</div>
									</div>
									<div className="shopping-cart-btns">
										<button className="main-btn">View Cart</button>
										<button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
									</div>
								</div>
							</div>
						</li>
					
						<li className="nav-toggle">
							<button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
						</li>
						
					</ul>
				</div>
			</div>

		</div>

	</div>



	<div id="home">

		<div className="container">
	
			<div className="home-wrap">

				<div id="home-slick">

					<div className="banner banner-1">
						<img src="/img/banner01.jpg" alt=""/>
						<div className="banner-caption text-center"/>
							<h1>Bags sale</h1>
							<h3 className="white-color font-weak">Up to 50% Discount</h3>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
	
					<div className="banner banner-1">
						<img src="/img/banner02.jpg" alt=""/>
						<div className="banner-caption">
							<h1 className="primary-color">
                HOT DEAL<br/>
                <span className="white-color font-weak">Up to 50% OFF</span>
              </h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
	
					<div className="banner banner-1">
						<img src="/img/banner03.jpg" alt=""/>
						<div className="banner-caption">
							<h1 className="white-color">New Product <span>Collection</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>

				</div>

			</div>

		</div>

	</div>



	<div className="section section-grey">

		<div className="container">

			<div className="row">
		
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="/img/banner10.jpg" alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
	


				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="/img/banner11.jpg" alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				
				<div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
					<a className="banner banner-1" href="#">
						<img src="/img/banner12.jpg" alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				

			</div>
		
		</div>
		
	</div>



	<div className="section section-grey">
		
		<div className="container">

			<div className="row">

				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-1 custom-dots"></div>
						</div>
					</div>
				</div>



				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src="/img/banner14.jpg" alt=""/>
						<div className="banner-caption">
							<h2 className="white-color">NEW<br/>COLLECTION</h2>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>



				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-1" className="product-slick">

							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product01.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>



							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product07.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
					
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product06.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
						
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product08.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
					
						</div>
					</div>
				</div>
		
			</div>

			<div className="row">
			
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-2 custom-dots">
							</div>
						</div>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single product-hot">
						<div className="product-thumb">
							<div className="product-label">
								<span className="sale">-20%</span>
							</div>
							<ul className="product-countdown">
								<li><span>00 H</span></li>
								<li><span>00 M</span></li>
								<li><span>00 S</span></li>
							</ul>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product01.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			
				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-2" className="product-slick">
					
							<div className="product product-single">
								<div className="product-thumb">
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product06.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
					
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span className="sale">-20%</span>
									</div>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product05.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
						
							<div className="product product-single">
								<div className="product-thumb">
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product04.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
					
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src="/img/product03.jpg" alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
			

						</div>
					</div>
				</div>

			</div>
		
		</div>

	</div>

	<div className="section section-grey">
	
		<div className="container">
		
			<div className="row">
	
				<div className="col-md-8">
					<div className="banner banner-1">
						<img src="/img/banner13.jpg" alt=""/>
						<div className="banner-caption text-center">
							<h1 className="primary-color">HOT DEAL<br/><span className="white-color font-weak">Up to 50% OFF</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
			
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="/img/banner11.jpg" alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
		
				<div className="col-md-4 col-sm-6">
					<a className="banner banner-1" href="#">
						<img src="/img/banner12.jpg" alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>

			</div>
	
		</div>

	</div>

	<div className="section section-grey">

		<div className="container">

			<div className="row">

				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Latest Products</h2>
					</div>
				</div>
	

				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product01.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product02.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product03.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product04.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
	
			</div>
	

			<div className="row">
			
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src="/img/banner15.jpg" alt=""/>
						<div className="banner-caption">
							<h2 className="white-color">NEW<br/>COLLECTION</h2>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
	
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product07.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product06.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product05.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
		
			</div>
	
			<div className="row">

				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Picked For You</h2>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product04.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			>
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product03.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product02.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src="/img/product01.jpg" alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
		
			</div>

		</div>

	</div>



	<footer id="footer" className="section section-grey">

		<div className="container">
	
			<div className="row">

				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						
						<div className="footer-logo">
							<a className="logo" href="#">
		            <img src="/img/logo.png" alt=""/>
		          </a>
						</div>
						

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

						
						<ul className="footer-social">
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
						</ul>
					
					</div>
				</div>
				

			
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">My Account</h3>
						<ul className="list-links">
							<li><a href="#">My Account</a></li>
							<li><a href="#">My Wishlist</a></li>
							<li><a href="#">Compare</a></li>
							<li><a href="#">Checkout</a></li>
							<li><a href="#">Login</a></li>
						</ul>
					</div>
				</div>
				

				<div className="clearfix visible-sm visible-xs"></div>

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">Customer Service</h3>
						<ul className="list-links">
							<li><a href="#">About Us</a></li>
							<li><a href="#">Shiping & Return</a></li>
							<li><a href="#">Shiping Guide</a></li>
							<li><a href="#">FAQ</a></li>
						</ul>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">Stay Connected</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
						<form>
							<div className="form-group">
								<input className="input" placeholder="Enter Email Address"/>
							</div>
							<button className="primary-btn">Join Newslatter</button>
						</form>
					</div>
				</div>
			
			</div>
			
			<hr/>
			
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
				
					<div className="footer-copyright">
					
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
						
					</div>
				
				</div>
			</div>
		
		</div>
	
	</footer>



	

</div>

  );

};


