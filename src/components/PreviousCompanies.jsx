import company1 from '../assets/company1.webp'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3-.png'
import company4 from '../assets/company4.png'
import { motion } from "framer-motion";

const companies = [
  {
    name: "Peak Link",
    logo: company1,
  },
  {
    name: "Majarat Albanfsaj",
    logo: company2,
  },
  {
    name: "BIS Technology",
    logo: company3,
  },
  {
    name: "Ugrait Tech",
    logo:company4,
  },
  
  // أضف الشركات الأخرى هنا
];

export default function PreviousCompanies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Companies I've Worked With
        </h2>
        <p className="text-gray-600 mb-12">
          A few of the amazing companies I had the chance to contribute to.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-[150px] w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-gray-800 font-medium group-hover:text-indigo-600 transition-colors duration-300">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}