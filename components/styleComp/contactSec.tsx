import React from "react";

function ContactSec() {
  return (
    <section className="bg-[#f46b00] px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Form Box */}
        <div className="bg-[#fdfcf7] rounded-xl shadow-md p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#333] mb-6">
            Let’s Connect and Make People Talk About {" "} <span className="text-orange-500 font-bold">Your Brand!</span>
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-[#f4f2e6] rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 bg-[#f4f2e6] rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Type here"
              rows={4}
              className="w-full px-4 py-2 bg-[#f4f2e6] rounded-md focus:outline-none"
              defaultValue={""}
            />
            <button className="w-full py-3 rounded-full border border-orange-500 text-[#333] hover:bg-orange-500 hover:text-white transition">
              Send Now
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="text-white flex flex-col gap-6">
          <p className="text-lg leading-relaxed">
            We bring marketing and creativity together to help brands grow faster.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm font-medium">
            <div>
              <div className="text-xl mb-1 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="28"
                  fill="none"
                  viewBox="0 0 29 28"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M3.847 1.813C5.613.058 8.52.369 10 2.345l1.83 2.444c1.205 1.607 1.098 3.853-.332 5.273l-.345.346a.94.94 0 0 0-.011.443c.091.592.586 1.846 2.657 3.906s3.334 2.553 3.935 2.646c.151.03.308.026.457-.013l.592-.589c1.27-1.262 3.22-1.499 4.793-.644l2.771 1.509c2.375 1.288 2.974 4.515 1.03 6.448l-2.061 2.049c-.65.646-1.524 1.184-2.588 1.284-2.626.245-8.744-.068-15.176-6.462C1.55 15.017.397 9.811.251 7.246c-.073-1.297.54-2.394 1.32-3.168zm4.41 1.837c-.735-.982-2.104-1.06-2.876-.293L3.103 5.62c-.479.476-.708 1-.679 1.503.116 2.038 1.045 6.734 6.662 12.32 5.893 5.858 11.335 6.034 13.439 5.836.43-.039.856-.262 1.255-.658l2.06-2.05c.838-.833.654-2.35-.532-2.995l-2.771-1.507c-.767-.415-1.663-.278-2.22.276l-.66.657-.77-.772c.77.772.768.773.767.773l-.002.003-.004.005-.01.008-.022.02a1.5 1.5 0 0 1-.197.154c-.116.077-.27.163-.463.234-.392.147-.911.225-1.552.126-1.258-.193-2.925-1.05-5.14-3.252s-3.08-3.86-3.273-5.116c-.1-.641-.02-1.16.127-1.552.082-.22.198-.426.345-.61l.047-.05.02-.022.009-.009.004-.004.003-.003.418-.415c.62-.62.708-1.645.123-2.427z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p>Phone</p>
              <p className="text-sm mt-1">+91 9876543210</p>
            </div>
            <div>
              <div className="text-xl mb-1 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="24"
                  fill="none"
                  viewBox="0 0 31 24"
                >
                  <path
                    fill="#fff"
                    d="M3.07 23.69q-1.161 0-1.935-.776-.775-.774-.778-1.936V2.905q0-1.16.778-1.935.777-.776 1.933-.777h24.79q1.157 0 1.933.777.775.777.777 1.935V20.98q0 1.158-.777 1.936-.777.777-1.934.775zm12.393-11.554L2.036 3.356V20.98q0 .452.29.742.291.29.744.29h24.787q.452 0 .742-.29t.29-.743V3.355zm0-1.873 12.91-8.392H2.553zM2.036 3.357V1.87 20.98q0 .452.29.742.291.29.744.29H2.036z"
                  ></path>
                </svg>
              </div>
              <p>Email</p>
              <p className="text-sm mt-1">ocelots@email.com</p>
            </div>
            <div>
              <div className="text-xl mb-1 flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  fill="none"
                  viewBox="0 0 30 31"
                >
                  <path
                    fill="#fff"
                    d="M15.348.959C7.27.959.688 7.54.688 15.618c0 2.588.681 5.103 1.953 7.322l-2.07 7.603 7.765-2.041a14.66 14.66 0 0 0 7.012 1.79c8.076 0 14.66-6.583 14.66-14.66 0-3.92-1.524-7.603-4.29-10.369A14.53 14.53 0 0 0 15.347.96m.015 2.47c3.254 0 6.301 1.272 8.609 3.58a12.18 12.18 0 0 1 3.565 8.624c0 6.715-5.473 12.174-12.19 12.174-2.188 0-4.333-.577-6.197-1.701l-.444-.252-4.615 1.213 1.228-4.497-.296-.473a12.13 12.13 0 0 1-1.864-6.48C3.174 8.903 8.632 3.43 15.363 3.43m-5.207 5.414c-.237 0-.636.089-.977.458-.325.37-1.286 1.273-1.286 3.063 0 1.804 1.316 3.535 1.479 3.786.207.252 2.603 3.95 6.287 5.518.872.4 1.553.621 2.085.784.873.28 1.672.236 2.308.148.71-.104 2.16-.888 2.47-1.746s.31-1.582.222-1.745c-.104-.148-.34-.237-.71-.4-.37-.207-2.174-1.094-2.5-1.213-.34-.118-.547-.177-.828.178-.237.37-.947 1.198-1.154 1.435-.222.251-.43.28-.784.103-.385-.192-1.568-.577-2.959-1.82-1.094-.975-1.819-2.174-2.04-2.543-.178-.355-.016-.577.162-.74.163-.163.4-.429.547-.65.192-.208.252-.37.37-.607.118-.252.06-.459-.03-.636-.088-.163-.828-1.997-1.139-2.722-.296-.71-.591-.622-.828-.636-.207 0-.444-.015-.695-.015"
                  ></path>
                </svg>
              </div>
              <p>Whatsapp</p>
              <p className="text-sm mt-1">+91 9876543210</p>
            </div>
            <div>
              <div className="text-xl mb-1 flex flex-col items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  fill="none"
                  viewBox="0 0 30 31"
                >
                  <path
                    fill="#fff"
                    d="M15.348.959C7.27.959.688 7.54.688 15.618c0 2.588.681 5.103 1.953 7.322l-2.07 7.603 7.765-2.041a14.66 14.66 0 0 0 7.012 1.79c8.076 0 14.66-6.583 14.66-14.66 0-3.92-1.524-7.603-4.29-10.369A14.53 14.53 0 0 0 15.347.96m.015 2.47c3.254 0 6.301 1.272 8.609 3.58a12.18 12.18 0 0 1 3.565 8.624c0 6.715-5.473 12.174-12.19 12.174-2.188 0-4.333-.577-6.197-1.701l-.444-.252-4.615 1.213 1.228-4.497-.296-.473a12.13 12.13 0 0 1-1.864-6.48C3.174 8.903 8.632 3.43 15.363 3.43m-5.207 5.414c-.237 0-.636.089-.977.458-.325.37-1.286 1.273-1.286 3.063 0 1.804 1.316 3.535 1.479 3.786.207.252 2.603 3.95 6.287 5.518.872.4 1.553.621 2.085.784.873.28 1.672.236 2.308.148.71-.104 2.16-.888 2.47-1.746s.31-1.582.222-1.745c-.104-.148-.34-.237-.71-.4-.37-.207-2.174-1.094-2.5-1.213-.34-.118-.547-.177-.828.178-.237.37-.947 1.198-1.154 1.435-.222.251-.43.28-.784.103-.385-.192-1.568-.577-2.959-1.82-1.094-.975-1.819-2.174-2.04-2.543-.178-.355-.016-.577.162-.74.163-.163.4-.429.547-.65.192-.208.252-.37.37-.607.118-.252.06-.459-.03-.636-.088-.163-.828-1.997-1.139-2.722-.296-.71-.591-.622-.828-.636-.207 0-.444-.015-.695-.015"
                  ></path>
                </svg>
              </div>
              <p>Location</p>
              <p className="text-sm mt-1">Lorem Ipsum Dolar</p>
            </div>
          </div>
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2369094539863!2d76.3146934!3d9.9972793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1f98f5928b%3A0x3472b02674ea7829!2sQ1%20Mall%20by%20Nippon%20Q1!5e0!3m2!1sen!2sin!4v1752577610476!5m2!1sen!2sin"
              // width={600}
              style={{ border: 0, width: "100%" }}
              height={208}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSec;
