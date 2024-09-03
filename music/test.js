const fileUrl = 'E:\Github\googleenezax.github.io\files\listMS.xlsx';

fetch(fileUrl)
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = 'sheet1'; // Tên của sheet cần truy cập
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        jsonData.forEach(row => {
            const option = document.createElement('option');
            option.text = row.B; // Tên nhạc từ cột B
            option.value = row.E; // Đường dẫn từ cột E
            document.getElementById('musicOptions').appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching the Excel file:', error));