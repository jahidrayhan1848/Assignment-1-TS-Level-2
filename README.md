            1. What is type inference in TypeScript? Why is it helpful?


🧠 Type Inference কি?
Type Inference হল TypeScript-এর একটি বৈশিষ্ট্য, যা কম্পাইলারকে অটো-ম্যাটিকভাবে একটি ভেরিয়েবলের টাইপ নির্ধারণ করতে দেয়, ভেরিয়েবলটি কিভাবে ইনিশিয়ালাইজ বা ব্যবহার করা হচ্ছে তার উপর ভিত্তি করে। এর মানে হল যে, আপনাকে টাইপটি ম্যানুয়ালি ডিফাইন করতে হয় না, TypeScript নিজেই সেটা বুঝে নেয়।

🛠️ Type Inference এর উপকারিতা কী?

কম কোড, ভালো পড়ার যোগ্যতা
 আপনি সবসময় টাইপ ম্যানুয়ালি ডিক্লেয়ার করতে হবে না।
 কম বয়লারপ্লেট কোড, ভুল টাইপ ব্যবহারের সম্ভাবনা কম।

মজবুত টাইপ সেফটি
TypeScript কোডে টাইপ চেকিং চালিয়ে যাবে, এমনকি আপনি যদি টাইপ না লিখে দেন।

প্রোটোটাইপিং এর জন্য উপকারী
আপনি দ্রুত কোড লিখতে পারেন এবং পরে টাইপ এনোটেশন যোগ করতে পারেন।


📌 Type Inference কোথায় ঘটে?

ভেরিয়েবল ইনিশিয়ালাইজেশন

ফাংশনের রিটার্ন ভ্যালু

ফাংশনের প্যারামিটার ডিফল্ট

ডেস্ট্রাকচারিং অ্যাসাইনমেন্ট

🧪 ফাংশন উদাহরণ:

function add(a: number, b: number) {
  return a + b;
}
রিটার্ন টাইপ হবে number

📘 সংক্ষিপ্তসার:


যদি TypeScript টাইপ নির্ধারণ করতে না পারে, তাহলে এটি any টাইপ ব্যবহার করবে — যা টাইপ সেফটি নিষ্ক্রিয় করে। তাই যদিও টাইপ ইনফারেন্স উপকারী, স্পষ্ট টাইপ এনোটেশন এখনও পাবলিক API এবং জটিল ডেটার জন্য সুপারিশ করা হয়।



What is the use of the keyof keyword in TypeScript? Provide an example.

🔍 keyof কী?

TypeScript-এ keyof একটি বিশেষ কীওয়ার্ড যা কোনো অবজেক্ট টাইপের property গুলোর নাম (key) গুলোকে একটি union টাইপ হিসেবে রিটার্ন করে।এটি সাধারণত generic function বা টাইপ ম্যানিপুলেশনের সময় ব্যবহার করা হয় যাতে কোডটি আরও টাইপ-সেফ হয়।

✅ উদাহরণ:
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// 'keyof Person' হবে: "name" | "age" | "isStudent"
type PersonKeys = keyof Person;

const key1: PersonKeys = "name";   
const key2: PersonKeys = "age";        

🛠️ বাস্তব উদাহরণ (Generic Function সহ):
function getProperty<T, Y extends keyof T>(obj: T, key: Y): T[Y] {
  return obj[key];
}

const person = { name: "Rupo", age: 26 };

const personName = getProperty(person, "name"); 
const personAge = getProperty(person, "age");   

এখানে getProperty() ফাংশনটি এমনভাবে লেখা যাতে obj অবজেক্টের শুধুমাত্র বৈধ key গুলোকেই অ্যাক্সেস করতে পারে।

📘 সংক্ষিপ্তসার:

কোনো টাইপের key গুলোকে union টাইপে রূপান্তর করে
Generic function, টাইপ চেকিং, mapped type ইত্যাদিতে
টাইপ সেফটি, ভুল key ইউজ রোধ, উন্নত কোড বুদ্ধিমত্তা


