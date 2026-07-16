// Hàm chạy khi trang web tải xong
window.onload = function() {
    console.log("Trang đã tải xong!"); // Yêu cầu: thêm console.log
    
    const figures = document.querySelectorAll('#gallery figure');

    for (let i = 0; i < figures.length; i++) {
        // Tự động thêm tabindex
        figures[i].setAttribute("tabindex", "0");

        // Gán các sự kiện
        figures[i].addEventListener('focus', function() { console.log("Đã focus"); });
        figures[i].addEventListener('blur', function() { console.log("Đã mất focus"); });
        figures[i].addEventListener('mouseover', function() { console.log("Chuột vào"); });
        figures[i].addEventListener('mouseleave', function() { console.log("Chuột rời"); });
    }
};
