import React, { useEffect, useState } from "react";

const Form = (props) => {
  const { CurrentShipment, formData, setFormData } = props;

  const [labl, setLabl] = useState(null);

  useEffect(() => {
    const { label, ...rest } = formData;
    rest.label = labl;

    setFormData();
  }, [labl]);

  return (
    <>
      <div className=" flex-1 mt-2  pt-6 max-h-[74vh] overflow-y-auto scrollbar-hide ">
        {/* DisplayName */}
        <div className="relative w-full max-w-xs">
          <input
            defaultValue={CurrentShipment?.label ?? ""}
            type="text"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
            onChange={(e) => setLabl(e.target.value)}
          />
          <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
            Label
          </label>
        </div>
      </div>
    </>
  );
};

export default Form;
