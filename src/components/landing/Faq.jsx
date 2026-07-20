import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "What is ProjectCamp?",
      answer:
        "ProjectCamp is a project management tool designed to help teams collaborate, organize tasks, and track progress efficiently.",
    },
    {
      id: 2,
      question: "Can I invite my team members ?",
      answer:
        "Yes, you can invite your team members, assign roles, tasks, and collaborate seamlessly within the platform.",
    },
    {
      id: 3,
      question: "Does ProjectCamp supports file uploads?",
      answer:
        "Yes. Attach files to projects and tasks so your team always has the required resources in one place.",
    },
    {
      id: 4,
      question: "Is my data secure?",
      answer:
        "Yes. ProjectCamp uses JWT authentication, role-based access control, and secure backend APIs to protect your data.",
    },
    {
      id: 5,
      question: "Can I manage multiple projects?",
      answer:
        "Absolutely. Create and manage multiple projects simultaneously while tracking progress, tasks, and team collaboration.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          FAQ
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Everything you need to know about ProjectCamp before getting started.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        {faqs.map((faq) => {
          return (
            <div
              key={faq.id}
              className="mb-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                onClick={() => {
                  toggleFaq(faq.id);
                }}
                className="flex  justify-between items-center cursor-pointer"
              >
                <h3>{faq.question}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openId === faq.id && (
                <div className="mt-4 border-t border-slate-100 pt-4 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
