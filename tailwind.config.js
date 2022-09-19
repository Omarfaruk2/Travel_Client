
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#1d4567", // [navbar colour hover joono use kora hoi]
          secondary: "#de5d83",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

