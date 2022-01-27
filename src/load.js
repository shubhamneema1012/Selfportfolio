import { NavLink } from "react-router-dom";
import si1 from "./shoes_images/shoe_1.jpg";
import si2 from "./shoes_images/shoe_2.jpg";
import si3 from "./shoes_images/shoe_3.jpg";
import si4 from "./shoes_images/shoe_4.jpg";
const Load = (props) => {
    return (
        <>
            <div class="card-wrapper">
                <div class="card">
                    {/* card left */}
                    <div class="product-imgs">
                        <div class="img-display">
                            <div class="img-showcase">
                                <img src={si1} alt="shoe image" />
                                <img src={si2} alt="shoe image" />
                                <img src={si3} alt="shoe image" />
                                <img src={si4} alt="shoe image" />
                            </div>
                        </div>
                        <div class="img-select">
                            <div class="img-item">
                                <NavLink href="Cards" data-id="1">
                                    <img src={si1} alt="shoe image" />
                                </NavLink>
                            </div>
                            <div class="img-item">
                                <NavLink href="#" data-id="2">
                                    <img src={si2} alt="shoe image" />
                                </NavLink>
                            </div>
                            <div class="img-item">
                                <NavLink href="#" data-id="3">
                                    <img src={si3} alt="shoe image" />
                                </NavLink>
                            </div>
                            <div class="img-item">
                                <NavLink href="#" data-id="4">
                                    <img src={si4} alt="shoe image" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* card right */}
                    <div class="product-content">
                        <h2 class="product-title">{props.product_name}</h2>
                        <NavLink href="#" class="product-link">{props.about_product}</NavLink>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>4.7(21)</span>
                        </div>

                        <div class="product-price">
                            <p class="last-price">Old Price: <span>${props.product_old_price}</span></p>
                            <p class="new-price">New Price: <span>${props.product_new_price}</span></p>
                        </div>

                        <div class="product-detail">
                            <h2>about this item: </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                            <ul>
                                <li>Color: <span>{props.product_color}</span></li>
                                <li>Available: <span>{props.product_stock}</span></li>
                                <li>Category: <span>{props.product_category}</span></li>
                                <li>Shipping Area: <span>{props.product_shipping_area}</span></li>
                                <li>Shipping Fee: <span>{props.product_shipping_fee}</span></li>
                            </ul>
                        </div>

                        <div class="purchase-info">
                            <input type="number" min="0" value="1" />
                            <button type="button" class="btn">
                                Add to Cart <i class="fas fa-shopping-cart"></i>
                            </button>
                            <button type="button" class="btn">Compare</button>
                        </div>

                        <div class="social-links">
                            <p>Share At: </p>
                            <NavLink href="#">
                                <i class="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink href="#">
                                <i class="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink href="#">
                                <i class="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink href="#">
                                <i class="fab fa-whatsapp"></i>
                            </NavLink>
                            <NavLink href="#">
                                <i class="fab fa-pinterest"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Load;