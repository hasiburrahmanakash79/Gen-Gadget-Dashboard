import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      {/* Profile Card */}
      <div>
        <div className="bg-white rounded-lg shadow p-6 col-span-1 flex flex-col items-center text-center">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="w-32 h-32 rounded-full object-cover mb-4"
            alt="profile"
          />
          <h2 className="text-lg font-semibold">Wade Warren</h2>
          <p className="text-gray-500 text-sm mb-2">wade.warren@example.com</p>
          <p className="text-xs text-gray-400">Linked with Social media</p>
          <div className="flex items-center justify-center gap-5 mt-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg"
              className="w-7"
              alt="gmail"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              className="w-7"
              alt="facebook"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              className="w-7"
              alt="linkedin"
            />
          </div>
          <button className="mt-4 px-4 py-2 text-sm bg-gray-100 rounded border border-gray-300">
            Social media
          </button>
        </div>
        {/* Password Section */}
        <div className="bg-white rounded-lg mt-7 shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <div className="gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              <p className="text-xs text-blue-500 mt-1 cursor-pointer">
                Forgot Current Password? Click here
              </p>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Re-enter Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
              Save Change
            </button>
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow p-6 col-span-2"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Profile Update</h2>
          <div className="flex items-center gap-2">
            
            <button
              type="button"
              className="text-sm bg-gray-100 px-4 py-1.5 rounded border border-gray-300"
            >
              Edit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              {...register("firstName")}
              defaultValue="Wade"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              {...register("lastName")}
              defaultValue="Warren"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password")}
              type={showCurrentPassword ? "text" : "password"}
              defaultValue="********"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 pr-10"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              {...register("phone")}
              defaultValue="(406) 555-0120"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              {...register("email")}
              defaultValue="wade.warren@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dob")}
              defaultValue="1999-01-12"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              {...register("location")}
              defaultValue="2972 Westheimer Rd. Santa Ana, Illinois 85486"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Credit Card
            </label>
            <input
              {...register("creditCard")}
              defaultValue="843-4359-4444"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Biography
            </label>
            <textarea
              {...register("bio")}
              placeholder="Enter a biography about you"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
          >
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
}
