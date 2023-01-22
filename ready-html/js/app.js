document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMode: true,
    centeredSlides: true,
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1.75,
    slidesOffsetBefore: -125,
  });
});
bindSwipers(slider1, slider2, slider3, slider4);
// weather
// 5d2d8b15035938c0540d540d55bbde2f
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.7593200&lon=25.3424400&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_1").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.6230800&lon=26.2274300&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_2").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.8382600&lon=24.0232400&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_3").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.5558900&lon=25.6055600&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_4").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.9215000&lon=24.7097200&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_5").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.6166700&lon=22.3000000&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_6").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
// колонка-2
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.2648700&lon=28.6766900&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_7").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.4546600&lon=30.5238000&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_8").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.4216100&lon=26.9965300&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_9").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.2327800&lon=28.4809700&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_10").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=46.4774700&lon=30.7326200&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_11").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.2914900&lon=25.9403400&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_12").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
// колонка-3
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=51.5055100&lon=31.2848700&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_13").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=50.9216000&lon=34.8002900&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_14").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.5937300&lon=34.5407300&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_15").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.4285400&lon=32.0620700&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_16").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.5132000&lon=32.2597000&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_17").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=46.9659100&lon=31.9974000&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_18").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
// колонка-4
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=49.9808100&lon=36.2527200&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_19").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.5670500&lon=39.3170600&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_20").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.0230000&lon=37.8022400&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_21").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=48.4500000&lon=34.9833300&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_22").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=47.8228900&lon=35.1903100&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_23").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=46.6558100&lon=32.6178000&appid=5d2d8b15035938c0540d540d55bbde2f"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".weather_24").textContent = Math.round(
      data.main.temp - 273
    );
  })
  .catch(function () {
    console.error();
  });
