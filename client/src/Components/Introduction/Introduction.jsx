import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

const Introduction = () => {
  console.log("introduction")
  return (
    <div>
        <Header/>
        <Menu/>
        <div class="col-md-4">
                <section class="panel">
                    <div class="pro-img-box">
                        <img src="https://www.bootdey.com/image/250x220/FFB6C1/000000" alt="" />
                        <a href="#" class="adtocart">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                    </div>

                    <div class="panel-body text-center">
                        <h4>
                            <a href="#" class="pro-title">
                                Leopard Shirt Dress
                            </a>
                        </h4>
                        <p class="price">$300.00</p>
                    </div>
                </section>
            </div>
    </div>
  )
}

export default Introduction