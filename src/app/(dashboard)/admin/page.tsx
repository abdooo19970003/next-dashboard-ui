import Widget from "@/components/Widget";
import React from "react";
import EventCalendar from "@/components/Calendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-1 gap-4 flex-col md:flex-row justify-between">
      {/* MAIN */}
      <div className="rounded-md  w-full lg:w-3/4 p-2">
        {/* widgets */}
        <section className=" flex flex-wrap justify-center gap-4">
          <Widget
            title="Users"
            theme="slate"
            value1={15}
            value1label="kullanıcı"
          />
          <Widget
            title="Müşteri"
            theme="ecru"
            value1={150}
            value1label="müşteri"
            value2={25}
            value2label="Yeni Müşteri - Bu sene"
          />
          <Widget
            title="Aktif sipariş"
            theme="blue"
            value1={9250}
            value1label="Kapı"
            value2={1200}
            value2label="Yeni sipariş - Bu Ay"
          />
          <Widget
            title="Sevk Edilen"
            theme="carmine"
            value1={1250}
            value1label="bu Ay"
            value2={7530}
            value2label="bu Yıl"
          />
          <Widget
            title="Üretimde"
            theme="purple"
            value1={1750}
            value1label="Kapı"
          />
        </section>
      </div>

      {/* secondary */}
      <div className="rounded-md  w-full lg:w-1/4 p-2 min-w-80 ">
        <section className="md:float-end">
          <EventCalendar />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
