import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <Navbar />
      <div className="h-full w-screen bg-[#E5E5E5]">
        {/* <h1>Count: {count}</h1>
        <button className="w-20 h-7 bg-red-500" onClick={handleIncrement}>
          +
        </button>
        <button className="w-20 h-7 bg-blue-400" onClick={handleDecrement}>
          -
        </button> */}
        <div className="w-4/5 grid grid-cols-2 gap-3 justify-center mx-auto">
          <div className="flex">
            <div className="justify-start">
              <Image
                src={"/images/phone.png"}
                width={400}
                height={200}
                alt="fazzpay mobile"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center my-auto gap-10">
              <h1 className="text-6xl font-bold text-[#3A3D42]">
                Awesome App For Saving{" "}
                <span className="text-[#6379F4]">Time.</span>
              </h1>
              <p className=" text-base">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button className="h-12 w-32 bg-[#6379F4] rounded-md font-medium text-white">
                Try It Free
              </button>
              <div className="flex flex-col gap-3">
                <h1>Available On :</h1>
                <div className="flex gap-3 -ml-2">
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
      <div className="w-screen h-[300px] bg-[#473AD10F]">
        <div className="w-4/5 h-full flex justify-around mx-auto">
          <div className="my-auto">
            <Image
              className="object-cover"
              src={"/images/microsoft.png"}
              height={40}
              width={100}
              alt="microsoft"
            />
          </div>
          <div className="my-auto">
            <Image
              className="object-cover"
              src={"/images/drop box.png"}
              height={40}
              width={100}
              alt="drop box"
            />
          </div>
          <div className="my-auto">
            <Image
              className="object-cover"
              src={"/images/hm.png"}
              height={40}
              width={100}
              alt="hm"
            />
          </div>
          <div className="my-auto">
            <Image
              className="object-cover"
              src={"/images/air bnd.png"}
              height={40}
              width={100}
              alt="air bnd"
            />
          </div>
          <div className="my-auto">
            <Image
              className="object-cover"
              src={"/images/canon.png"}
              height={40}
              width={100}
              alt="canon"
            />
          </div>
          <div className="my-auto">
            <Image
              className="object-cover"
              src={"/images/dell.png"}
              height={40}
              width={100}
              alt="dell"
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
        <div className="w-4/5 h-full flex flex-col justify-evenly mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#3A3D42]">
            <span className="text-[#6379F4]">About</span> the Application.
          </h1>
          <p className="text-center  text-[#3A3D42]">
            We have some great features from the application and it’s totally
            free <br /> to use by all users around the world.
          </p>
          <div className="grid grid-cols-3 gap-5">
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
      <div className="h-full w-screen bg-[#E5E5E5]">
        <div className="w-4/5 grid grid-cols-2 gap-3 justify-center mx-auto">
          <div className="flex">
            <div className="justify-start">
              <Image
                src={"/images/phone.png"}
                width={400}
                height={200}
                alt="fazzpay mobile"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center my-auto gap-10">
              <h1 className="text-6xl font-bold text-[#3A3D42]">
                All The <span className="text-[#6379F4]">Great.</span> Fazzpay
                Features.
              </h1>
              <div className="h-20 bg-white rounded-lg p-3">
                <h1 className="font-medium text-xl text-[#3A3D42]">
                  <span className="text-[#6379F4]">1. </span>Small Fee
                </h1>
                <p className="text-[#3A3D42] ml-1">
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>
              <div className="h-20 bg-white rounded-lg p-3">
                <h1 className="font-medium text-xl text-[#3A3D42]">
                  <span className="text-[#6379F4]">2. </span>Data Secured
                </h1>
                <p className="text-[#3A3D42] ml-1">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
              <div className="h-20 bg-white rounded-lg p-3">
                <h1 className="font-medium text-xl text-[#3A3D42]">
                  <span className="text-[#6379F4]">3. </span>User Friendly
                </h1>
                <p className="text-[#3A3D42] ml-1">
                  FazzPay come up with modern and sleek design and not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen relative">
        <div className="w-4/5 h-full flex flex-col justify-evenly mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#3A3D42]">
            {" "}
            What Users are
            <span className="text-[#6379F4]"> Saying.</span>
          </h1>
          <p className="text-center  text-[#3A3D42]">
            We have some great features from the application and it’s totally
            free <br /> to use by all users around the world.
          </p>
          <div className="flex gap-5 justify-center mx-auto w-full items-stretch">
            <div className="self-center">a</div>
            <div className="w-[90%] h-[400px] bg-neutral-100 rounded-lg flex flex-col justify-evenly">
              <div className="flex flex-col gap-2">
                <Image
                  className="mx-auto"
                  src={"/images/1.png"}
                  width={80}
                  height={80}
                  alt="customer fazzpay"
                />
                <h1 className="text-center font-semibold  text-xl text-[#373C46]">
                  Alex Hansinburg
                </h1>
                <h3 className="text-center text-[#56585B]">Designer</h3>
                <p className="content-center text-center px-16">
                  “This is the most outstanding app that I’ve ever try in my
                  live, this app is such an amazing masterpiece and it’s
                  suitable for you who is bussy with their bussiness and must
                  transfer money to another person aut there. Just try this app
                  and see the power!”
                </p>
              </div>
            </div>
            <div className="self-center">a</div>
          </div>
        </div>
      </div>
    </>
  );
}
