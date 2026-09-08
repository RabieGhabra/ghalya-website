export default function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-4 font-lexend font-medium text-[26px] leading-5.75 tracking-normal">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full h-12 bg-[#EFEFEF] rounded-md px-4 outline-none font-lexend text-[16px] leading-5.75 tracking-normal"
          />
        </div>
        <div>
          <label className="block mb-4 font-lexend font-medium text-[26px] leading-5.75 tracking-normal">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full h-12 bg-[#EFEFEF] rounded-md px-4 outline-none font-lexend text-[16px] leading-5.75 tracking-normal"
          />
        </div>
      </div>
      <div>
        <label className="block mb-4 font-lexend font-medium text-[26px] leading-5.75 tracking-normal">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full h-12 bg-[#EFEFEF] rounded-md px-4 outline-none font-lexend text-[16px] leading-5.75 tracking-normal"
        />
      </div>
      <div>
        <label className="block mb-4 font-lexend font-medium text-[26px] leading-5.75 tracking-normal">
          Message
        </label>
        <textarea
          rows={24}
          placeholder="Enter your Message"
          className="w-full bg-[#EFEFEF] rounded-md p-4 resize-none outline-none font-lexend text-[16px] leading-5.75 tracking-normal"
        />
      </div>
      <button
        type="button"
        className="
        cursor-pointer
        w-full
        h-14
        rounded-md
        text-white
        bg-linear-to-r
        from-[#C21875]
        via-[#8A135F]
        to-[#4A0D42]
        font-lexend
        font-medium
        text-[16px]
        leading-none
        tracking-normal
        text-center
        "
      >
        Send Message
      </button>
    </form>
  );
}
