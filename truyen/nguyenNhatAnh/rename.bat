@echo off
setlocal enabledelayedexpansion

rem Đặt thư mục mục tiêu
set "targetDir=E:\Github\googleenezax.github.io\truyen\nguyenNhatAnh"

rem Kiểm tra xem thư mục hiện tại có phải là thư mục mục tiêu không
if /i not "%cd%"=="%targetDir%" (
    echo Thư mục hiện tại không phải là %targetDir%.
    echo Vui lòng chuyển đến thư mục đó trước khi chạy file này.
    pause
    exit /b
)

rem Lặp qua tất cả các file trong thư mục hiện tại
for %%f in (*.*) do (
    rem Kiểm tra xem file có phải là file .bat không
    if /i not "%%~nxf"=="%~nx0" (
        set "filename=%%~nf"
        set "extension=%%~xf"

        rem Chuyển sang chữ thường
        set "newname=!filename!"
        set "newname=!newname: =_!"

        rem Chuyển toàn bộ sang chữ thường
        set "newname=!newname:~0,1!!newname:~1!"

        rem Chuyển phần mở rộng thành chữ thường
        set "extension=!extension:~0,1!!extension:~1!"

        rem Kết hợp lại với phần mở rộng
        set "newname=!newname!!extension!"

        rem Đổi tên file chỉ khi tên mới khác với tên cũ
        if not "%%f"=="!newname!" (
            ren "%%f" "!newname!"
            echo Đã đổi tên: %%f -> !newname!
        )
    )
)
pause
endlocal