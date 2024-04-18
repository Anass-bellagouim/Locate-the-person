var isLive = false
var shareLocation
document.getElementById("getLocation").onclick = ()=>{
   


    shareLocation = navigator.geolocation.watchPosition(
        function(position){
            document.getElementById("map").innerHTML =
            `<iframe height="300" width="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"> </iframe>`
        },
        function(error){
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById("alert").innerHTML = `<div class="alert alert-danger mt-3 mb-3" role="alert">
                    لقد قمت برفض وصول إلى موقعك, يرجى محاولة وموافقة
                    </div>`
                    break
                    case error.UNKNOWN_ERROR:
                        document.getElementById("alert").innerHTML = `<div class="alert alert-danger mt-3 mb-3" role="alert">
                        حدث خطأ غير معروف
                        </div>`

                    break
            }
        }
    )


    if(isLive === false){
        console.log("تم تشغيل تحديد الموقع")
        document.getElementById("getLocation").innerHTML = "إيقاف المشاركة   "
        isLive = true
    }else{
        console.log("تم ايقاف تشغيل تحديد الموقع")
        navigator.geolocation.clearWatch(shareLocation)
        document.getElementById("getLocation").innerHTML = "عرض  موقعي  "
        isLive = false
    }
}