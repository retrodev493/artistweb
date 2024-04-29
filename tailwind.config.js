/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      onest:"var(--ff-onest)"
    },
    container: {
      center: true,
      padding: "12px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1524px",
        "3xl": "1760px",
      },
    },
    extend: {
      backgroundColor: { 
       "linear-violet":"var(--linear-violet)",
       "text-bg": "var(--text-bg)",
       "text-bg-2":"var(--text-bg-2)",
        "bg-gray":"var(--bg-gray)",
      },
      colors:{
        "white-color":"var(--white-color)",
        "black-color":"var(--black-color)",
        "blue-color":"var(--blue-color)",
        "gray":"var(--gray-color)",
        
      },
      fontSize:{
        "ttl-53":"var(--ttl-53)",
        "ttl-48":"var(--ttl-48)",
        "ttl-149":"var(--ttl-149)",
        "fs-16":"var(--fs-16)",
        "fs-20":"var(--fs-20)",
        "fs-24":"var(--fs-24)",
        "fs-28":"var(--fs-28)",
        
      }
    },
  },
  plugins: [],
};
