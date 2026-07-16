// Hàm chạy khi trang web tải xong
window.onload = function() {
    console.log("Trang đã tải xong!"); // Kiểm tra onload
    
    // Chọn tất cả các figure trong gallery
    const figures = document.querySelectorAll('#gallery figure');

    for (let i = 0; i < figures.length; i++) {
        // Tự động thêm tabindex để keyboard có thể focus vào
        figures[i].setAttribute("tabindex", "0");

        // Gán các sự kiện theo yêu cầu
        figures[i].addEventListener('focus', function() { console.log("Đã focus"); });
        figures[i].addEventListener('blur', function() { console.log("Đã mất focus"); });
        figures[i].addEventListener('mouseover', function() { console.log("Chuột vào"); });
        figures[i].addEventListener('mouseleave', function() { console.log("Chuột rời"); });
    }
};
