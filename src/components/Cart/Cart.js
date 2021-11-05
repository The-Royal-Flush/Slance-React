import React from 'react';
import "./Cart.css";

function Cart() {
    return (
        <div>
            <header>
      <h1 class="heading">🛒 Shopping Cart</h1>
      <h4 class="directory">
        <ul>
          <li><a href="./home.html">Homepage</a></li>
          /
          <li><a href="./product_pc.html">Products</a></li>
          /
          <li><a href="./cart_pc.html">Shopping Cart</a></li>
        </ul>
      </h4>
    </header>

    <main>
      <div class="div_1">
        <div class="login_details">
          <div class="user_info">
            <h3>LOGIN <i class="uil uil-check"></i></h3>
            <h3>Michale Smith</h3>
            <h3>+91 99 88 965856</h3>
          </div>
          <button class="change_btn">CHANGE</button>
        </div>

        <div class="shipping_address">
          <div class="address_container">
            <h3>SHIPPING ADDRESS <i class="uil uil-check"></i></h3>
            <h3 class="address_line_1 address">
              Angan Apartment, Malwadi, Talegaon
            </h3>
            <h3 class="address_line_2 address">Pune 411039, MH, IN</h3>
          </div>
          <button class="change_btn">CHANGE</button>
        </div>

        <div class="payment_container">
          <div class="payment_title"> <div class="dot_element"><div class="dot_letter">b</div></div> <h3>PAYMENT METHOD</h3> </div>

          <div class="payment_method">

          </div>
        </div>
      </div>

      <div class="div_2">
        <h3>Your Order</h3>
        <hr class="divider_element"/>

        <div class="order_container">

          <div class="product_outer_container">
            <div class="product_container_1">
              <img src="../img/product__pr1_img_1.png" alt="" class="product_img"/>
              <div class="product_desc">
                <h3 class="product_title">Nike Air</h3>
                <div class="product_variant">
                  <div class="product_size"> <p class="product_size_title">Size : </p> <p class="product_size_value">12</p></div> <p class="product_color">Color : Blue</p>
                </div>
                <div class="price_quant"><p class="product_price">$ 234.55</p> <p class="product_quantity">x 01</p></div>
              </div>
            </div>
            
            <hr class="divider_element"/>
            
            <div class="product_container_2">
              <img src="../img/product__pr1_img_1.png" alt="" class="product_img"/>
              <div class="product_desc">
                <h3 class="product_title">Nike Air</h3>
                <div class="product_variant">
                  <div class="product_size"> <p class="product_size_title">Size : </p> <p class="product_size_value">12</p></div> <p class="product_color">Color : Blue</p>
                </div>
                <div class="price_quant"><p class="product_price">$ 234.55</p> <p class="product_quantity">x 01</p></div>
              </div>
            </div>

            <div class="product_container_2">
              <img src="../img/product__pr1_img_1.png" alt="" class="product_img"/>
              <div class="product_desc">
                <h3 class="product_title">Nike Air</h3>
                <div class="product_variant">
                  <div class="product_size"> <p class="product_size_title">Size : </p> <p class="product_size_value">12</p></div> <p class="product_color">Color : Blue</p>
                </div>
                <div class="price_quant"><p class="product_price">$ 234.55</p> <p class="product_quantity">x 01</p></div>
              </div>
            </div>

            <div class="product_container_2">
              <img src="../img/product__pr1_img_1.png" alt="" class="product_img"/>
              <div class="product_desc">
                <h3 class="product_title">Nike Air</h3>
                <div class="product_variant">
                  <div class="product_size"> <p class="product_size_title">Size : </p> <p class="product_size_value">12</p></div> <p class="product_color">Color : Blue</p>
                </div>
                <div class="price_quant"><p class="product_price">$ 234.55</p> <p class="product_quantity">x 01</p></div>
              </div>
            </div>

            <div class="product_container_2">
              <img src="../img/product__pr1_img_1.png" alt="" class="product_img"/>
              <div class="product_desc">
                <h3 class="product_title">Nike Air</h3>
                <div class="product_variant">
                  <div class="product_size"> <p class="product_size_title">Size : </p> <p class="product_size_value">12</p></div> <p class="product_color">Color : Blue</p>
                </div>
                <div class="price_quant"><p class="product_price">$ 234.55</p> <p class="product_quantity">x 01</p></div>
              </div>
            </div>

          </div>

          <hr class="divider_element"/>

          <div class="delivery_container">
          <p class="delivery_title">Delivery</p>
          <div class="delivery">
            <p class="delivery_price fw-500">$20</p>
            <p class="delivery_type fc-accent-450">(Express)</p>
          </div>
          </div>

          <div class="discount_container">
          <p class="discount_title">Discount</p>
          <div class="discount">
            <p class="discount_price fw-500">-$10</p>
          </div>
          </div>

          <div class="total_container">
          <p class="total_title fw-500">Total</p>
          <p class="total_price fw-600">$69.00</p>
          </div>

        </div>
      </div>
    </main>
        </div>
    )
}

export default Cart
