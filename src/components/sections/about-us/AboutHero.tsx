export default function AboutHero() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl min-h-105 lg:min-h-170 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226587.png')`,
      }}
    >
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/0" />
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between h-full p-6 sm:p-8 lg:p-12 pt-14 lg:pt-20">
        <div className="max-w-178 text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent font-bold mb-4 lg:mb-6 leading-none">
            Ghalya: Rewarding
            <br />
            Every Spend
          </h1>
          <p className="font-light text-xl sm:text-2xl leading-8">
            Welcome to the Ghalya Loyalty Program, where every transaction is
            not just an exchange but a unique opportunity to earn and relish
            unparalleled rewards. At Ghalya, we are revolutionizing the retail
            landscape in Saudi Arabia by partnering with premier brands like
            BinDawood and Danube, and now, we're delighted to include
            YouGotaGift.com in our growing family of partners.
          </p>
          <p className="font-light text-xl sm:text-2xl leading-8">
            Our journey began with a vision to offer unmatched value and
            convenience to millions of customers across the Kingdom, turning
            everyday shopping into a rewarding experience. Through our
            innovative program, members can earn points on every purchase at our
            partner brands, which can be redeemed for a wide variety of
            exclusive benefits and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
