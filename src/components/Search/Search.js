import React from 'react'
import "./Search.css";
function Search() {
    return (
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
            <section className="filter__container shadow">
    <div className="brand__head bb hh flex">
      <h1 className="he">Brand</h1>
      <i className="uil uil-angle-down icons"></i>
    </div>
    
    <div className="cat__head">
      <div className="container">
        <div className="control-group">
          <h1>Category</h1>
          <label className="control control--checkbox">First checkbox
            <input type="checkbox" checked="checked" />
            <div className="control__indicator"></div>
          </label>
          <label className="control control--checkbox">second checkbox
            <input type="checkbox" checked="checked" />
            <div className="control__indicator"></div>
          </label>
          <label className="control control--checkbox">third checkbox
            <input type="checkbox" checked="checked" />
            <div className="control__indicator"></div>
          </label>
          <label className="control control--checkbox">fourth checkbox
            <input type="checkbox" checked="checked" />
            <div className="control__indicator"></div>
          </label>
        </div>
      </div>
    </div>
    <div className="price hh">
      <h1 className="he">Price Range</h1>
    </div>
    <div className="size">
      <h1 className="he">Size</h1>
      <div className="btn">
        <button className="button">XS</button>
        <button className="button">S</button>
        <button className="button">M</button>
        <button className="button">L</button>
        <button className="button">XL</button>
        <button className="button">XXL</button>
      </div>
    </div>

    </section>
    <section className="item__container ">
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>
      <div className="item__card shadow">
        <h1 className="light-heading">High Speed Sneakers</h1>
        <h1 className="bold-heading">Nike Air Max</h1>
        <img src="https://s3-alpha-sig.figma.com/img/3643/d09f/046f8f5312111227c47846b4bfaee66e?Expires=1636934400&Signature=LyL4ubvurKYXbAg7pQp9ODep4ISj961DlOyNTF9xvD5m4hz2uugNe6ZnzAwf~PExRHaSsi0Wnoe2kL3I7~~CGjEBYdIYnsj4sLyKfcf60XTk7tUd1L30Uvd1I3wcZolnckfUYrVVmmni0gPiid4oAa5piww1301X-xplYvM8eZunGnYBoxD2xgBJPltkvAuMFbCGx~wwY6LovApTt~bGBpEmKa4pp0X-OZHiEcDj8IWvRJkd3iew0xIUMN95Kojco638k~ZFUeGY5wPs8Lupaa89kP22Qs3kw54PfpsfWazy3kX7iJIlCLWfzQzk~qksFKs8cz4TdpGdOlH8oN20Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" className="item__img"/>
        <h3 className="light-heading">Price</h3>
        <h3 className="item__price">$341</h3>
      </div>


    </section>

        </div>
    )
}

export default Search
