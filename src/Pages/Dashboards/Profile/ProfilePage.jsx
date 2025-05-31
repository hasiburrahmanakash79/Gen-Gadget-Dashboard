import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import google_icon from '../../../assets/logo/google.png'
import facebook_icon from '../../../assets/logo/facebook.png'
import x_icon from '../../../assets/logo/twitter_x.png'
import link_icon from '../../../assets/logo/link-angled.png'


const InputField = ({
  label,
  name,
  type = "text",
  register,
  editable,
  colSpan,
  watch,
}) => (
  <div className={colSpan ? `col-span-${colSpan}` : ""}>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      {...register(name)}
      value={watch(name)}
      disabled={!editable}
      className="mt-1 block w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-2 pr-10"
    />
  </div>
);

export default function ProfilePage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState(
    "https://randomuser.me/api/portraits/men/75.jpg"
  );

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "Wade",
      lastName: "Warren",
      phone: "(406) 555-0120",
      email: "wade.warren@example.com",
      dob: "1999-01-12",
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      creditCard: "843-4359-4444",
      bio: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Updated data:", data);
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      {/* Profile Card */}
      <div>
        <div className="bg-white rounded-lg shadow p-10 col-span-1 flex flex-col items-center text-center">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="w-32 h-32 rounded-full object-cover mb-4"
            alt="profile"
          />
          <h2 className="text-xl font-semibold">Wade Warren</h2>
          <p className="text-gray-500 text-md mb-7">wade.warren@example.com</p>
          <p className="text-md text-[#4B5563]">Linked with Social media</p>
          <div className="flex items-center justify-center gap-5 mt-2 text-3xl">
            <div className="flex items-center gap-2">
              <img src={google_icon} alt="" className="w-6" />
              <a href="www.google.com" target="_blank" className="text-[#6467F2] hover:underline flex items-center text-sm"> <img src={link_icon} className="w-5" alt="" /> Linked</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={facebook_icon} alt="" className="w-6" />
              <a href="www.facebook.com" target="_blank" className="text-[#6467F2] hover:underline flex items-center text-sm"> <img src={link_icon} className="w-5" alt="" /> Linked</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={x_icon} alt="" className="w-5" />
              <a href="www.x.com" target="_blank" className="text-[#6467F2] hover:underline flex items-center text-sm"> <img src={link_icon} className="w-5" alt="" /> Linked</a>
            </div>
          </div>
        </div>
        {/* Password Section */}
        <div className="bg-white rounded-lg mt-7 shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <div className="gap-4 space-y-5">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                className="mt-1 block w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-2 pr-10"
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
                className="mt-1 block w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-2 pr-10"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Re-Enter Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="mt-1 block w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-2 pr-10"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#078165] text-white px-6 py-2 rounded shadow w-full">
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
          <button
            type="button"
            onClick={() => setEditMode(true)}
            className="text-sm bg-gray-100 px-4 py-1.5 rounded border border-gray-300"
          >
            Edit
          </button>
        </div>

        <div className="relative w-32 h-32 mb-4">
          <img
            src={image}
            className="w-32 h-32 rounded-full object-cover"
            alt="profile"
          />
          {editMode && (
            <label className="absolute top-1 right-1 bg-white p-1 rounded-full shadow cursor-pointer">
              <FaCamera className="text-gray-600 text-lg" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="firstName"
            register={register}
            editable={editMode}
            watch={watch}
          />
          <InputField
            label="Last Name"
            name="lastName"
            register={register}
            editable={editMode}
            watch={watch}
          />
          <InputField
            label="Phone Number"
            name="phone"
            register={register}
            editable={editMode}
            watch={watch}
          />
          <InputField
            label="E-mail"
            name="email"
            register={register}
            editable={editMode}
            watch={watch}
          />
          <InputField
            label="Date of Birth"
            name="dob"
            type="date"
            register={register}
            editable={editMode}
            watch={watch}
          />
          <InputField
            label="Location"
            name="location"
            register={register}
            editable={editMode}
            watch={watch}
          />
          <InputField
            label="Credit Card"
            name="creditCard"
            register={register}
            editable={editMode}
            watch={watch}
            colSpan={2}
          />
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Biography
            </label>
            <textarea
              {...register("bio")}
              disabled={!editMode}
              placeholder="Write something about yourself..."
              className="mt-1 block w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-2 pr-10"
              rows={3}
            />
          </div>
        </div>

        {editMode && (
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#078165] text-white px-6 py-2 rounded shadow"
            >
              Save Change
            </button>
          </div>
        )}
      </form>
    </div>
  );
}


