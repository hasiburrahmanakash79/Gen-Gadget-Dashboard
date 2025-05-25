import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { FiUpload } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1990 + 1 },
  (_, i) => 1990 + i
);

const UserQualification = () => {
  const [educationList, setEducationList] = useState([{ id: Date.now() }]);
  const [certList, setCertList] = useState([{ id: Date.now() }]);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const handleAddEducation = () => {
    setEducationList([...educationList, { id: Date.now() }]);
  };

  const handleRemoveEducation = (id) => {
    if (educationList.length > 1) {
      setEducationList(educationList.filter((item) => item.id !== id));
    }
  };

  const handleAddCert = () => {
    setCertList([...certList, { id: Date.now() }]);
  };

  const handleRemoveCert = (id) => {
    if (certList.length > 1) {
      setCertList(certList.filter((item) => item.id !== id));
    }
  };

  const onSubmit = async (data) => {
    const valid = await trigger();

    if (step === 1 && valid) {
      setStep(2);
    } else if (step === 2 && valid) {
      console.log("Final submitted data: ", data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your qualifications have been submitted successfully!",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="p-5 max-w-3xl w-full">
        {step === 1 && (
          <>
            <div className="mb-10">
              <h1 className="text-3xl text-center font-bold">
                Education Background
              </h1>
              <p className="text-center text-sm mb-6 text-gray-400">
                Please fill in your education background details below.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {educationList.map((edu, index) => (
                <div
                  key={edu.id}
                  className="border rounded-3xl border-gray-200 p-5"
                >
                  <div className="flex justify-between items-center mb-4 border-b-2 border-gray-200 pb-2">
                    <h2 className="text-xl font-bold ">
                      Education #{index + 1}
                    </h2>
                    {educationList.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveEducation(edu.id)}
                        className="text-xl cursor-pointer"
                      >
                        <RiCloseCircleFill />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Degree
                      </label>
                      <input
                        type="text"
                        {...register(`education.${index}.degree`, {
                          required: "This field is required",
                        })}
                        placeholder="Bachelor of Science"
                        className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                      />
                      {errors.education?.[index]?.degree && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.education[index].degree.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Institute
                      </label>
                      <input
                        type="text"
                        {...register(`education.${index}.institute`, {
                          required: "This field is required",
                        })}
                        placeholder="University Name"
                        className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                      />
                      {errors.education?.[index]?.institute && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.education[index].institute.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Subject / Major
                      </label>
                      <input
                        type="text"
                        {...register(`education.${index}.subject`, {
                          required: "This field is required",
                        })}
                        placeholder="Computer Science"
                        className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                      />
                      {errors.education?.[index]?.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.education[index].subject.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Start Year
                        </label>
                        <select
                          {...register(`education.${index}.startYear`, {
                            required: "This field is required",
                          })}
                          className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                        >
                          <option value="">Select Year</option>
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        {errors.education?.[index]?.startYear && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.education[index].startYear.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          End Year
                        </label>
                        <select
                          {...register(`education.${index}.endYear`, {
                            required: "This field is required",
                          })}
                          className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                        >
                          <option value="">Select Year</option>
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        {errors.education?.[index]?.endYear && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.education[index].endYear.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">
                      Result / GPA
                    </label>
                    <input
                      type="number"
                      {...register(`education.${index}.result`, {
                        required: "This field is required",
                      })}
                      placeholder="3.8/4.0 or First Class"
                      className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                    />
                    {errors.education?.[index]?.result && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.education[index].result.message}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="w-full border border-gray-200 py-2 rounded-lg cursor-pointer"
                onClick={handleAddEducation}
              >
                Add More Education
              </button>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg cursor-pointer"
                >
                  Save & Continue
                </button>
              </div>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-10">
              <h1 className="text-3xl text-center font-bold">Certifications</h1>
              <p className="text-center text-sm mb-6 text-gray-400">
                Please fill in your certifications below.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {certList.map((cert, index) => (
                <div
                  key={cert.id}
                  className="border rounded-3xl border-gray-200 p-5"
                >
                  <div className="flex justify-between items-center mb-4 border-b-2 border-gray-200 pb-2">
                    <h2 className="text-xl font-bold ">
                      Certificate #{index + 1}
                    </h2>
                    {certList.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveCert(cert.id)}
                        className="text-xl cursor-pointer"
                      >
                        <RiCloseCircleFill />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Certificate Title
                      </label>
                      <input
                        type="text"
                        {...register(`certifications.${index}.title`, {
                          required: "This field is required",
                        })}
                        placeholder="Full Stack Web Development"
                        className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                      />
                      {errors.certifications?.[index]?.title && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.certifications[index].title.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Institute
                      </label>
                      <input
                        type="text"
                        {...register(`certifications.${index}.institute`, {
                          required: "This field is required",
                        })}
                        placeholder="Coursera / Udemy / etc."
                        className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                      />
                      {errors.certifications?.[index]?.institute && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.certifications[index].institute.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Year
                      </label>
                      <select
                        {...register(`certifications.${index}.year`, {
                          required: "This field is required",
                        })}
                        className="w-full border border-base-300 bg-base-200 rounded-lg p-2 outline-none"
                      >
                        <option value="">Select Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      {errors.certifications?.[index]?.year && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.certifications[index].year.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Upload Certificate (Optional)
                      </label>
                      <div className="relative w-full">
                        <label
                          htmlFor={`file-upload-${index}`}
                          className="flex items-center justify-center gap-2 cursor-pointer border border-base-300 bg-base-200 rounded-lg py-1.5 px-4 w-full text-center hover:bg-base-100 transition text-gray-600"
                        >
                          <span>Choose File</span>
                          <FiUpload className="text-xl" />
                        </label>
                        <input
                          id={`file-upload-${index}`}
                          type="file"
                          accept="application/pdf,image/*"
                          {...register(`certifications.${index}.file`)}
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="w-full border border-gray-200 py-2 rounded-lg cursor-pointer"
                onClick={handleAddCert}
              >
                Add More Certificate
              </button>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UserQualification;
