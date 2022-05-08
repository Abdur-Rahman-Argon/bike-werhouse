import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto w-9/12 my-4 bg-gray-50 p-16">
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h1>
            <b> Question: </b> Difference between javascript and Nodejs?
          </h1>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer:</b>
          </p>
          <ul className="mx-8 my-3">
            <li className="my-2">
              <b>Javascript:</b>
            </li>
            <li className="my-2"></li>
            <li className="my-2">
              জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যেতে পারে।
            </li>
            <li className="my-2"> এটি মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়। </li>
            <li className="my-2">
              জাভাস্ক্রিপ্ট এইচটিএমএল যোগ করতে এবং DOM এর সাথে খেলতে যথেষ্ট
              সক্ষম।
            </li>
            <li className="my-2">
              জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা। এটি একটি সঠিক ব্রাউজার ইঞ্জিন
              সহ যেকোনো ওয়েব ব্রাউজারে চলছে।
            </li>
            <li className="my-2">
              {" "}
              জাভাস্ক্রিপ্ট ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়।{" "}
            </li>
            <li className="my-2">
              কিছু জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক হল RamdaJS, TypedJS, ইত্যাদি। কিছু
              নোডেজ মডিউল হল Lodash, express ইত্যাদি। এই মডিউলগুলি npm থেকে
              আমদানি করতে হয়।
            </li>
          </ul>
          <ul className="mx-8 my-3">
            <li className="my-2">
              <b>Nodejs:</b>
            </li>
            <li className="my-2">নোডজেএস একটি জাভাস্ক্রিপ্ট রানটাইম পরিবেশ।</li>
            <li className="my-2">
              NodeJS এর ​​সাহায্যে ব্রাউজারের বাইরে Javascript চালাতে পারি।
            </li>
            <li className="my-2">এটি বেশিরভাগই সার্ভার-সাইডে ব্যবহৃত হয়।</li>
            <li className="my-2">Nodejs এর HTML ট্যাগ যোগ করার ক্ষমতা নেই।</li>
            <li className="my-2">
              জাভাস্ক্রিপ্ট যেকোন ব্রাউজার ইঞ্জিনে চলতে পারে যেমন সাফারিতে জেএস
              কোর এবং ফায়ারফক্সে স্পাইডারমনকি।
            </li>
            <li className="my-2">
              V8 হল node.js এর ভিতরে জাভাস্ক্রিপ্ট ইঞ্জিন যা জাভাস্ক্রিপ্ট পার্স
              করে এবং চালায়।
            </li>
            <li className="my-2">
              Nodejs সার্ভার-সাইড উন্নয়ন ব্যবহার করা হয়.
            </li>
            <li className="my-2">
              এটি ECMA স্ক্রিপ্টের আপগ্রেড সংস্করণ যা C++ এ লেখা Chrome এর V8
              ইঞ্জিন ব্যবহার করে। নোডেজগুলি সি, সি ++ এবং জাভাস্ক্রিপ্টে লেখা
              হয়।
            </li>
          </ul>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h2>
            <b> Question: </b>When should you use nodejs and when should you use
            mongodb?
          </h2>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer:</b>
          </p>
          <p className="mx-8 my-3">
            <b>Nodejs: </b>
            Nodejs হল একটি জাভাস্ক্রিপ্ট ইঞ্জিন যা দিয়ে যেকোন অ্যাপ্লিকেশন লিখা
            যাবে। এটা জাভাস্ক্রিপ্ট কোড দ্বারা চালে। এটা সার্ভার তৈরি করতে
            ব্যবহৃত হয় যা ওয়েব অনুরোধে সাড়া দিতে পারে।
            <br />
            যকোনো project এ একটি program তৈরি করতে একটি রানটাইম লাইব্রেরি
            প্রয়োজন যা কাজকে অনেক সহজ করে। কোড রূপান্তরিত ও ব্যাখ্যা করতে পারে।
            যা Nodejs দিয়ে খুব সহজেই করা যায় এজন্য Nodejs ব্যবহার করা হয়।
          </p>
          <p className="mx-8 my-3">
            <b>MongoDb: </b>
            MongoDB একটি ডাটাবেসইঞ্জিন। কোনো অ্যাপ্লিকেশন বা সার্ভারের মধ্যে
            কোডের মাধ্যমে এটা ডাটাবেসে ডেটা সংরক্ষণ, তথ্য অনুসন্ধান বা আপডেট
            করতে MongoDB ব্যবহার করে।
            <br />
            কোনো অ্যাপ্লিকেশনে যদি ক্রমাগতভাবে ডেটা সঞ্চয় করার প্রয়োজন হয়
            যাতে সময়ের সাথে অনুসন্ধান করা যায়। এবং সেটা আপডেট করা যায়। তাহলে
            অবশ্যই ডাটাবেস ব্যবহার করা উচিত। অনেক জনপ্রিয় Nosql ডাটাবেস হল
            MongoDB ডাটাবেস। যা দ্বারা স্বয়ংক্রিয় ভাবে ডাটা যোগ এবং গ্রহন করা
            যায়।
          </p>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h1>
            <b> Question: </b>Differences between sql and nosql databases?
          </h1>
        </div>
        <hr className="w-11/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer:</b>
          </p>
          <p className="mx-8 my-3">
            <b>SQL:</b>
            <ul>
              <li> SQL ডাটাবেসগুলি সম্পর্কযুক্ত!</li>
              <li>
                SQL ডাটাবেস Structured query ভাষা ব্যবহার করে এবং একটি
                পূর্বনির্ধারিত পরিকল্পনা আছে।{" "}
              </li>
              <li> SQL ডাটাবেসগুলি উল্লম্বভাবে সমান্তরাল। </li>
              <li>SQL ডাটাবেসগুলি টেবিল-ভিত্তিক।</li>
              <li>SQL ডাটাবেসগুলি বহু-সারি লেনদেনের জন্য ভাল।</li>
            </ul>
            <b>NOSQL:</b>
            <ul>
              <li>NOSQL ডেটাবেসগুলি সম্পর্কহীন।</li>
              <li>
                {" "}
                Nosql ডাটাবেসে UnStructured ডেটার জন্য গতিশীল পরিকল্পনা রয়েছে।
              </li>
              <li>Nosql ডেটাবেসগুলি অনুভূমিকভাবে সমান্তরাল। </li>
              <li>
                Nosql ডাটাবেসগুলি document, key-value, graph, width column.।{" "}
              </li>
              <li> NoSQL JSON-এর মতো অসংগঠিত ডেটার জন্য ভাল।</li>
            </ul>
          </p>
        </div>
      </div>
      <div className=" bg-white my-12 py-3 text-left pl-10 shadow-xl rounded-lg">
        <div className="my-3 mx-3 text-2xl">
          <h2>
            <b> Question: </b>What is the purpose of jwt and how does it work?
          </h2>
          <p></p>
        </div>
        <hr className="w-9/12" />
        <div className="mx-5 my-5">
          <p className="text-xl">
            <b className="border-b-2 border-gray-900"> Answer:</b>
          </p>
          <p className="mx-8 my-3">
            JSON ওয়েব টোকেন (JWT) হল একটি ওপেন স্ট্যান্ডার্ড Secret যা JSON
            অবজেক্ট হিসাবে পক্ষগুলির মধ্যে নিরাপদে তথ্য প্রেরণের জন্য একটি
            নিরাপদ উপায় সংজ্ঞায়িত করে। ব্যবহারকারী একবার লগ ইন করলে JWT
            অন্তর্ভুক্ত হবে। যার কাছে JWT token থাকবে তাকে Data access করতে দেয়
            হবে। যার কাছে JWT token থাকবে না তাকে Data access করতে দেয় হবে হবে
            না। পুনরায় সঠিক তথ্য দিলে তাকে নতুন টোকেন দেওয়া হবে। এভাবে টোকেন
            ব্যবহার করে নিরাপদে তথ্য আদান প্রদান একটি ভাল উপায় এবং নিরাপদ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
