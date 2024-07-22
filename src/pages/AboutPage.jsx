import React from "react";

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="px-[100px] py-10 justify-center items-center text-center text-5xl font-bold bg-gray-200">
        <h1>About us</h1>
      </div>
      <div className="px-[100px] py-10 text-center">
        <div className="w-full md:text-center text-left">
          <h2 className="md:text-[42px] text-[32px] font-semibold w-full mb-6">
            Fluentorr Stands Out Because...?
          </h2>
        </div>
        <p className="text-base text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          possimus tempora quidem error nesciunt consequatur, quos dolorum
          doloremque illo perspiciatis obcaecati et dicta, necessitatibus,
          adipisci velit fugit fugiat? Sed, tempore.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sequi possimus tempora quidem error
          nesciunt consequatur, quos dolorum doloremque illo perspiciatis
          obcaecati et dicta, necessitatibus, adipisci velit fugit fugiat? Sed,
          tempore.
        </p>
      </div>

      <div className="">
        <div className="">
          <article className=" border-gray-300 m-2 border-2">
            <div className="">
              <img
                alt=""
                src="/facebook.svg"
                class="h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            </div>
            <div class="p-4">
              <p class="mt-2 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
              </p>
            </div>
          </article>
          <article className=" border-gray-300 m-2 border-2">
            <img
              alt=""
              src="/facebook.svg"
              class="h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <p class="mt-2 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
              </p>
            </div>
          </article>
        </div>

        <div className="">
          <article className=" border-gray-300 m-2 border-2">
            <img
              alt=""
              src="/facebook.svg"
              class="h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <p class="mt-2 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
              </p>
            </div>
          </article>
          <article className=" border-gray-300 m-2 border-2">
            <img
              alt=""
              src="/facebook.svg"
              class="h-56 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div class="p-4">
              <p class="mt-2 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
