var isLive = false;
var shareLocation;
var accessLocation;
document.getElementById("getLocation").onclick = () => {
  if (isLive === false) {
    shareLocation = navigator.geolocation.watchPosition(
      function (position) {
        accessLocation = true;
        document.getElementById(
          "alert"
        ).innerHTML = `<div class="alert alert-success" role="alert">
              يتم عرض موقعك الآن في الخريطة بشكل مباشر
            </div>`;

        document.getElementById("getLocation").innerHTML = "إيقاف المشاركة   ";
        isLive = true;

        document.getElementById(
          "map"
        ).innerHTML = `<iframe height="300" width="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"> </iframe>`;
      },
      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            document.getElementById(
              "alert"
            ).innerHTML = `<div class="alert alert-danger mt-3 mb-3" role="alert">
                      لقد قمت برفض وصول إلى موقعك, يرجى محاولة وموافقة
                      </div>`;
            break;
          case error.UNKNOWN_ERROR:
            document.getElementById(
              "alert"
            ).innerHTML = `<div class="alert alert-danger mt-3 mb-3" role="alert">
                          حدث خطأ غير معروف
                          </div>`;
            break;
        }
      }
    );
  } else if (isLive === true && accessLocation === true) {
    document.getElementById(
      "alert"
    ).innerHTML = `<div class="alert alert-success" role="alert">
        تم إيقاف مشاركة موقع بنجاح
        </div>`;
    navigator.geolocation.clearWatch(shareLocation);
    document.getElementById("getLocation").innerHTML = "عرض  موقعي  ";
    isLive = false;
  }
};
