import React from 'react';
import './App.css';

function Header() {
    const handleButtonClick1 = () => {
        alert('Button 1 clicked!');
    };

    const handleButtonClick2 = () => {
        alert('Button 2 clicked!');
    };

    
    const sectionImages = [
        [
            "https://www.reuters.com/resizer/v2/ZN3DZN6YUNLS3JP2NY3EA3WG2Q.jpg?auth=380f3566d51d3f549cf8c052c6d66feccc6b894722e65e1e92fc73b01444d904&width=4822&quality=80",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLHTATeThEmiZyT-GpbbKp7K2HyMFvTDt8nwqzdl_hRBFW0C7XQiNazG6B1L1rEuZOKU&usqp=CAU",
            "https://www.autohebdo.net/editorial/media/172630/2019-lamborghini-urus-02-va-fr.jpg?width=972&height=546&v=1d57d12ab296dc0"
        ],
        [
            "https://images.hindustantimes.com/auto/img/2022/06/15/1600x900/Lamborghini_Aventador_Ultimae_Roadster_1655282971884_1655282978599.jpeg",
            "https://i.ytimg.com/vi/WOUOzu14mn0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC8GttGKMRVJEnMHVTAKkgvwd7yA4",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm197m690SWJlwdR3886BvoKYILil9PUDKQ&s"
        ],
        [
          "https://blogs.gomechanic.com/wp-content/uploads/2020/05/Volkswagen-The-Name-You-Know-The-Company-You-Dont-01.jpg",
          "https://www.cartoq.com/wp-content/uploads/2024/12/volkswagen-golf-gti.jpg.webp",
          "https://cdn.motor1.com/images/mgl/Kb1e0M/s1/2024-volkswagen-golf-gte.webp"
        
        ],
        [
          "https://bmw.scene7.com/is/image/BMW/g90_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
          "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-139-667b0f49f2fca.jpg?crop=0.837xw:0.707xh;0.0673xw,0.262xh&resize=1200:*",
          "https://www.exoticcarhacks.com/wp-content/uploads/2024/04/GewM6VXA.jpeg"
        ],
        [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uGrqD5aUhHplZ9k45IIxfmyRzIGsaApveg&s",
          "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Audi-TT-2019/6515/rear-left-view-121.jpg",
          "https://cdn.motor1.com/images/mgl/1ZQ2ep/s1/2024-audi-tt-special-edition-for-spain.webp"
        ],
        [
          "https://www.reuters.com/resizer/v2/ZN3DZN6YUNLS3JP2NY3EA3WG2Q.jpg?auth=380f3566d51d3f549cf8c052c6d66feccc6b894722e65e1e92fc73b01444d904&width=4822&quality=80",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLHTATeThEmiZyT-GpbbKp7K2HyMFvTDt8nwqzdl_hRBFW0C7XQiNazG6B1L1rEuZOKU&usqp=CAU",
          "https://www.autohebdo.net/editorial/media/172630/2019-lamborghini-urus-02-va-fr.jpg?width=972&height=546&v=1d57d12ab296dc0"
      ],
      [
          "https://images.hindustantimes.com/auto/img/2022/06/15/1600x900/Lamborghini_Aventador_Ultimae_Roadster_1655282971884_1655282978599.jpeg",
          "https://i.ytimg.com/vi/WOUOzu14mn0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAC8GttGKMRVJEnMHVTAKkgvwd7yA4",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm197m690SWJlwdR3886BvoKYILil9PUDKQ&s"
      ],
      [
        "https://blogs.gomechanic.com/wp-content/uploads/2020/05/Volkswagen-The-Name-You-Know-The-Company-You-Dont-01.jpg",
        "https://www.cartoq.com/wp-content/uploads/2024/12/volkswagen-golf-gti.jpg.webp",
        "https://cdn.motor1.com/images/mgl/Kb1e0M/s1/2024-volkswagen-golf-gte.webp"
      
      ],
      [
        "https://bmw.scene7.com/is/image/BMW/g90_driving-dynamics_fb?qlt=80&wid=1024&fmt=webp",
        "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-139-667b0f49f2fca.jpg?crop=0.837xw:0.707xh;0.0673xw,0.262xh&resize=1200:*",
        "https://www.exoticcarhacks.com/wp-content/uploads/2024/04/GewM6VXA.jpeg"
      ],
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uGrqD5aUhHplZ9k45IIxfmyRzIGsaApveg&s",
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Audi-TT-2019/6515/rear-left-view-121.jpg",
        "https://cdn.motor1.com/images/mgl/1ZQ2ep/s1/2024-audi-tt-special-edition-for-spain.webp"
      ]
    ];

    
    const sectionDescriptions = [
        "The Lamborghini Urus is a high performance luxury SUV manufactured by Italian automobile manufacturer Lamborghini. It was introduced in December 2017 as a 2018 model year production vehicle.[4] The Urus is the first Lamborghini SUV and five-door vehicle in the modern era (under the ownership of Volkswagen Group), and the second SUV in the brand's history after the LM002, which was produced between 1986 and 1993.",
        "The Lamborghini Aventador (Spanish pronunciation: [aβentaˈðoɾ]) is a mid-engine, two passenger sports car manufactured and marketed by Lamborghini from 2011 until 2022. Named after a prominent Spanish fighting bull that fought in Zaragoza, Aragón, in 1993,[10][11][12] the Aventador succeeded the Murciélago and was manufactured in Sant'Agata Bolognese, Italy.",
        "The Volkswagen Golf is a compact car/small family car (C-segment) produced by the German automotive manufacturer Volkswagen since 1974, marketed worldwide across eight generations, in various body configurations and under various nameplates – including as the Volkswagen Rabbit in the United States and Canada (Mk1 and Mk5), and as the Volkswagen Caribe in Mexico (Mk1).",
        "The BMW M5 is a high-performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports saloon category.[1][2] The M5 has always been produced in the saloon (sedan, US English) body style, but in some countries the M5 has also been available as an estate (wagon, US English) from 1992 to 1995, from 2006 to 2010, and since 2024The first M5 model was hand-built beginning in late 1984 on the E28 535i chassis with a modified engine from the M1 that made it the fastest production saloon at the time.[6] M5 models have been produced for every generation of the 5 Series since 1984, with occasional gaps in production (1995 to 1998, 2023 to 2024).",
        "The Audi TT is a production front-engine, 2-door, 2+2 sports coupé and roadster, manufactured and marketed by Audi from 1998 to 2023 across three generations.For each of its three generations, the TT has been based on consecutive generations of Volkswagen's Group A platforms, starting with its fourth generation. The TT shares powertrain and suspension layouts with its platform mates, including the Audi A3, like a transversely mounted front-engine, powering front-wheel drive or four-wheel drive, and fully independent suspension using MacPherson struts in front.",
        "Join exclusive events showcasing Lamborghini's latest innovations.",
        "Read testimonials from Lamborghini owners about their experiences.",
        "Explore customization options available for Lamborghini vehicles.",
        "Stay updated with news related to Lamborghini and luxury cars.",
        "Join the community of Lamborghini enthusiasts."
    ];

    return (
      <>
        <header className="header">
            <h1 className="title">CAR GALLERY</h1>
            <div className="button-container">
                <button onClick={handleButtonClick1} className="button">LOGIN</button>
                <button onClick={handleButtonClick2} className="button">SIGNUP</button>
            </div>
            
        </header>
        <nav className="navigation">
                <button className="nav-button">Home</button>
                <button className="nav-button">Product</button>
                <button className="nav-button">Shopping</button>
                <button className="nav-button">Contact</button>
                <button className="nav-button">Blog</button>
        </nav>
        
        <main className="main-content">
          {[...Array(10)].map((_, index) => (
              <section className={`section section-${index + 1}`} key={index}>
                  <h2>CAR {index + 1}</h2>
                  <div className="images">
                      {sectionImages[index].map((image, imgIndex) => (
                          <img 
                              src={image} 
                              alt={`Lamborghini ${index + 1} Image ${imgIndex + 1}`} 
                              key={imgIndex}
                          />
                      ))}
                  </div>
                  <p>{sectionDescriptions[index]}</p> {}
                  {index === 2 && (
                      <>
                          <video controls width="300">
                              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                          <audio controls>
                          <source src="horse.ogg" type="audio/ogg"/>
                              Your browser does not support the audio tag.
                          </audio>
                      </>
                  )}
              </section>
          ))}
      </main>

      
      <footer className="footer">
          <div className="footer-section">
              <h4>Customer Service</h4>
              <ul>
                  <li><a href="#">Help & FAQs</a></li>
                  <li><a href="#">Returns & Refunds</a></li>
                  <li><a href="#">Shipping Information</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </div>
          <div className="footer-section">
              <h4>Products</h4>
              <ul>
                  <li><a href="#">Electronics</a></li>
                  <li><a href="#">Books</a></li>
                  <li><a href="#">Clothing</a></li>
                  <li><a href="#">Home & Kitchen</a></li>
              </ul>
          </div>
          <div className="footer-section">
              <h4>About Us</h4>
              <ul>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
              </ul>
          </div>
          <div className="footer-section">
              <h4>Follow Us</h4>
              <ul className="social-media">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">LinkedIn</a></li>
              </ul>
          </div>
      </footer>

      </>
    );
}

export default Header;
