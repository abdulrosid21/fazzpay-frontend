import Landingpage from "@/components/footer/landingpage";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fazzpay</title>
      </Head>
      <Navbar />
      <div className="h-full bg-[#E5E5E5] px-4 md:px-0">
        <div className="max-w-7xl mx-auto py-12 md:py-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex justify-center md:justify-start">
              <Image
                src={"/images/phone.png"}
                width={400}
                height={200}
                alt="fazzpay mobile"
              />
            </div>
            <div className="flex flex-col justify-center mt-6 md:mt-0 md:ml-8">
              <h1 className="text-4xl md:text-6xl font-bold text-[#3A3D42] leading-tight">
                Awesome App For Saving{" "}
                <span className="text-[#6379F4]">Time.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button className="mt-8 md:mt-12 h-12 w-40 md:w-48 bg-[#6379F4] rounded-md font-medium text-white">
                Try It Free
              </button>
              <div className="flex flex-col gap-3 mt-8 md:mt-12">
                <h1 className="text-base md:text-lg">Available On :</h1>
                <div className="flex gap-3">
                  <Image
                    src={"/images/gplay.png"}
                    height={50}
                    width={50}
                    alt="gplay"
                  />
                  <Image
                    src={"/images/appstore.png"}
                    height={60}
                    width={60}
                    alt="apple store"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen min-h-screen lg:h-full bg-[#473AD10F] flex p-3 md:p-0">
        <div className="w-4/5 min-h-[300px] flex flex-col md:flex-row md:justify-around mx-auto ">
          <div className="h-full mb-5 flex items-stretch">
            <Image
              className="self-center m-auto object-cover"
              src={"/images/microsoft.png"}
              height={40}
              width={100}
              alt="microsoft"
            />
          </div>
          <div className="h-full mb-5 flex items-stretch">
            <Image
              className="self-center m-auto object-cover"
              src={"/images/dropbox.png"}
              height={40}
              width={100}
              alt="drop box"
            />
          </div>
          <div className="h-full mb-5 flex items-stretch">
            <Image
              className="self-center m-auto object-cover"
              src={"/images/hm.png"}
              height={40}
              width={100}
              alt="hm"
            />
          </div>
          <div className="h-full mb-5 flex items-stretch">
            <Image
              className="self-center m-auto object-cover"
              src={"/images/airbnd.png"}
              height={40}
              width={100}
              alt="air bnd"
            />
          </div>
          <div className="h-full mb-5 flex items-stretch">
            <Image
              className="self-center m-auto object-cover"
              src={"/images/canon.png"}
              height={40}
              width={100}
              alt="canon"
            />
          </div>
          <div className="h-full mb-5 flex items-stretch">
            <Image
              className="self-center m-auto object-cover"
              src={"/images/dell.png"}
              height={40}
              width={100}
              alt="dell"
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-full lg:h-screen">
        <div className="w-4/5 h-full flex flex-col justify-evenly mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#3A3D42]">
            <span className="text-[#6379F4]">About</span> the Application.
          </h1>
          <p className="text-center text-[#3A3D42]">
            We have some great features from the application and it’s totally
            free
            <br /> to use by all users around the world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="h-[300px] rounded-md flex flex-col justify-evenly">
              <div className="h-20 w-20 rounded-full bg-[#473AD11A] flex mx-auto">
                <Image
                  className="justify-center m-auto"
                  src={"/images/phones.png"}
                  width={30}
                  height={30}
                  alt="phones fazzpay"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#3A3D42] text-center">
                24/7 Support
              </h1>
              <p className="text-[#3A3D42] text-center content-center">
                We have 24/7 contact support so you <br /> can contact us
                whenever you want <br /> and we will respond it.
              </p>
            </div>
            <div className="h-[300px] rounded-md flex flex-col justify-evenly">
              <div className="h-20 w-20 rounded-full bg-[#473AD11A] flex mx-auto">
                <Image
                  className="justify-center m-auto"
                  src={"/images/lock.png"}
                  width={30}
                  height={30}
                  alt="security fazzpay"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#3A3D42] text-center">
                Data Privacy
              </h1>
              <p className="text-[#3A3D42] text-center content-center">
                We make sure your data is safe in our <br /> database and we
                will encrypt any <br /> data you submitted to us.
              </p>
            </div>
            <div className="h-[300px] rounded-md flex flex-col justify-evenly">
              <div className="h-20 w-20 rounded-full bg-[#473AD11A] flex mx-auto">
                <Image
                  className="justify-center m-auto"
                  src={"/images/download.png"}
                  width={30}
                  height={30}
                  alt="download fazzpay"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#3A3D42] text-center">
                Easy Download
              </h1>
              <p className="text-[#3A3D42] text-center content-center">
                Zwallet is 100% totally free to use it’s <br /> now available on
                Google Play Store <br /> and App Store.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full bg-[#E5E5E5]  md:mb-0">
        <div className="w-full lg:w-4/5 mx-auto grid gap-6 lg:grid-cols-2 py-2">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full lg:w-3/4 xl:w-1/2">
              <Image
                src={"/images/phone.png"}
                width={400}
                height={200}
                alt="fazzpay mobile"
              />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full lg:w-3/4 flex flex-col justify-center gap-8">
              <h1 className="text-3xl lg:text-6xl font-bold text-[#3A3D42] leading-tight">
                All The <span className="text-[#6379F4]">Great.</span> Fazzpay
                Features.
              </h1>
              <div className="min-h-20 bg-white rounded-lg p-4">
                <h2 className="font-medium text-lg lg:text-xl text-[#3A3D42]">
                  <span className="text-[#6379F4]">1. </span>Small Fee
                </h2>
                <p className="text-[#3A3D42] ml-1">
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>
              <div className="min-h-20 bg-white rounded-lg p-3">
                <h2 className="font-medium text-lg lg:text-xl text-[#3A3D42]">
                  <span className="text-[#6379F4]">2. </span>Data Secured
                </h2>
                <p className="text-[#3A3D42] ml-1">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
              <div className="min-h-20 bg-white rounded-lg p-3">
                <h2 className="font-medium text-lg lg:text-xl text-[#3A3D42]">
                  <span className="text-[#6379F4]">3. </span>User Friendly
                </h2>
                <p className="text-[#3A3D42] ml-1">
                  FazzPay comes with a modern and sleek design and is not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen pb-14 md:pb-10">
        <div className="w-4/5 mx-auto min-h-screen flex flex-col justify-evenly">
          <h1 className="text-5xl font-bold text-center text-[#3A3D42]">
            {" "}
            What Users are<span className="text-[#6379F4]"> Saying.</span>
          </h1>
          <p className="text-center text-[#3A3D42]">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mx-auto items-stretch">
            <div className="absolute bottom-1 left-[30%] lg:static lg:self-center">
              <button class="bg-white shadow-lg hover:bg-primary text-white font-bold py-2 px-4 rounded-lg flex items-center">
                <svg
                  class="h-5 w-5 text-black transform -rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="w-full md:w-[90%] h-[400px] bg-white shadow-xl rounded-lg flex flex-col justify-evenly">
              <div className="flex flex-col gap-2">
                <Image
                  className="mx-auto"
                  src={"/images/1.png"}
                  width={80}
                  height={80}
                  alt="customer fazzpay"
                />
                <h1 className="text-center font-semibold text-xl text-[#373C46]">
                  Alex Hansinburg
                </h1>
                <h3 className="text-center text-[#56585B]">Designer</h3>
                <p className="text-center px-16">
                  “This is the most outstanding app that I’ve ever tried in my
                  life, this app is such an amazing masterpiece and it’s
                  suitable for you who is busy with their business and must
                  transfer money to another person out there. Just try this app
                  and see the power!”
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 right-[30%] lg:static lg:self-center">
              <button class="bg-white shadow-lg hover:bg-primary text-white font-bold py-2 px-4 rounded-lg flex items-center">
                <svg
                  class="h-5 w-5 text-black transform rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Landingpage />
    </>
  );
}
