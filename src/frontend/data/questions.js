// Chemistry questions database for grades 7 - 6 lessons
// Structure: { lesson, square, difficulty, question, options, answer, explanation }

export const questions = {
  // BÀI 2: NGUYÊN TỬ (Atoms)
  lesson2: [
    {
      square: 2,
      difficulty: "OWL",
      question: "Hạt nhân nguyên tử được cấu tạo từ các hạt",
      options: [
        "A. proton, electron và neutron",
        "B. proton và electron",
        "C. proton và neutron",
        "D. electron và neutron"
      ],
      answer: "C",
      explanation: "Lí thuyết SGK - CTST/15, 16"
    },
    {
      square: 3,
      difficulty: "OWL",
      question: "Lớp vỏ nguyên tử được cấu tạo từ các hạt",
      options: [
        "A. electron",
        "B. proton",
        "C. neutron",
        "D. electron và proton"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/15"
    },
    {
      square: 4,
      difficulty: "NEWT",
      question: "Hạt không mang điện trong nguyên tử là",
      options: [
        "A. proton",
        "B. neutron",
        "C. electron",
        "D. hạt nhân"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/16"
    },
    {
      square: 5,
      difficulty: "OWL",
      question: "Hạt mang điện tích âm trong nguyên tử là",
      options: [
        "A. proton",
        "B. neutron",
        "C. electron",
        "D. hạt nhân"
      ],
      answer: "C",
      explanation: "Lí thuyết SGK - CTST/15"
    },
    {
      square: 6,
      difficulty: "NEWT",
      question: "Cho biết nguyên tử Oxygen có tổng số hạt trong nguyên tử là 24, số proton trong hạt nhân là 8. Hãy tính số neutron trong hạt nhân của Oxygen?",
      options: [
        "A. 8",
        "B. 4",
        "C. 16",
        "D. 12"
      ],
      answer: "A",
      explanation: "Tổng số hạt: p + e + n = 24. Mà p = e → 2p + n = 24, mà p = 8 → n = 8"
    },
    {
      square: 7,
      difficulty: "OWL",
      question: "Cho biết các hạt cấu tạo nên nguyên tử?",
      options: [
        "A. Proton, neutron, electron",
        "B. Proton, electron",
        "C. Proton, neutron",
        "D. Electron"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/15, 16"
    },
    {
      square: 9,
      difficulty: "WOMBAT",
      question: "Vì sao khối lượng hạt nhân có thể xem là khối lượng nguyên tử?",
      options: [
        "A. Vì nguyên tử có lớp vỏ rỗng",
        "B. Vì electron có khối lượng nhỏ hơn rất nhiều lần so với proton và neutron",
        "C. Vì electron chuyển động hỗn loạn nên không đo được khối lượng",
        "D. Vì số hạt proton và neutron lớn hơn số electron"
      ],
      answer: "B",
      explanation: "Proton và neutron có khối lượng xấp xỉ gần bằng nhau (gần bằng 1 amu). Electron có khối lượng rất bé (chỉ khoảng 0,00055 amu), nhỏ hơn rất nhiều so với proton và neutron."
    },
    {
      square: 11,
      difficulty: "NEWT",
      question: "Khối lượng gần đúng của nguyên tử sodium (11p, 12n) là",
      options: [
        "A. 11 amu",
        "B. 12 amu",
        "C. 23 amu",
        "D. 34 amu"
      ],
      answer: "C",
      explanation: "Khối lượng nguyên tử = khối lượng p + khối lượng n = 11 + 12 = 23 amu"
    },
    {
      square: 13,
      difficulty: "WOMBAT",
      question: "Nguyên tử X có 2 electron ở lớp thứ nhất, 8 electron ở lớp thứ hai, 3 electron ở lớp thứ ba. Số hạt mang điện trong nguyên tử X là",
      options: [
        "A. 13",
        "B. 26",
        "C. 39",
        "D. 10"
      ],
      answer: "B",
      explanation: "Nguyên tử X có số electron là 2 + 8 + 3 = 13 electron. Mà nguyên tử trung hòa về điện ⇒ số proton = số electron = 13. Số hạt mang điện là tổng số hạt proton và electron bằng 13 + 13 = 26."
    },
    {
      square: 14,
      difficulty: "WOMBAT",
      question: "Cho các phát biểu sau: (1) Nguyên tử trung hoà về điện. (2) Khối lượng của nguyên tử tập trung chủ yếu ở hạt nhân. (3) Trong nguyên tử, số hạt mang điện tích dương bằng số hạt mang điện tích âm nên số hạt electron bằng số hạt neutron. (4) Vỏ nguyên tử gồm các lớp electron có khoảng cách khác nhau đối với hạt nhân. Số phát biểu đúng là",
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      answer: "C",
      explanation: "(1), (2), (4) đúng. (3) sai vì số hạt electron bằng số hạt proton"
    },
    {
      square: 16,
      difficulty: "NEWT",
      question: "Nguyên tử phosphorus có tổng số hạt là 46, trong đó số hạt không mang điện là 16. Số hạt proton trong nguyên tử phosphorus là",
      options: [
        "A. 15",
        "B. 16",
        "C. 30",
        "D. 31"
      ],
      answer: "A",
      explanation: "Số hạt mang điện của nguyên tử phosphorus là 46 – 16 = 30, bao gồm hạt proton và electron. Mà số hạt proton bằng số hạt electron, số hạt mỗi loại là: p = e = 30 : 2 = 15"
    },
    {
      square: 18,
      difficulty: "WOMBAT",
      question: "Cho nguyên tử sodium có 11 proton trong hạt nhân. Câu nào sau đây không đúng?",
      options: [
        "A. Sodium có 11 electron ở lớp vỏ nguyên tử",
        "B. Sodium có điện tích hạt nhân là +11",
        "C. Sodium có số đơn vị điện tích hạt nhân là 11",
        "D. Sodium có 11 neutron trong hạt nhân"
      ],
      answer: "D",
      explanation: "Không thể suy ra số neutron trong hạt nhân từ số proton."
    }
  ],

  // BÀI 3: NGUYÊN TỐ HÓA HỌC (Chemical Elements)
  lesson3: [
    {
      square: 2,
      difficulty: "OWL",
      question: "Tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân được gọi là",
      options: [
        "A. nguyên tử",
        "B. nguyên tố",
        "C. phân tử",
        "D. chất"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/18"
    },
    {
      square: 3,
      difficulty: "OWL",
      question: "Các nguyên tử thuộc cùng một nguyên tố hóa học có",
      options: [
        "A. tính chất vật lí giống nhau",
        "B. cùng số neutron trong hạt nhân",
        "C. tính chất hóa học giống nhau",
        "D. cùng số hạt trong nguyên tử"
      ],
      answer: "C",
      explanation: "Lí thuyết SGK - CTST/18"
    },
    {
      square: 4,
      difficulty: "NEWT",
      question: "Nguyên tố hoá học có kí hiệu Cl là",
      options: [
        "A. chlorine",
        "B. carbon",
        "C. copper",
        "D. calcium"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/20"
    },
    {
      square: 5,
      difficulty: "OWL",
      question: "Hiện nay có bao nhiêu nguyên tố hóa học đã được xác định",
      options: [
        "A. 118",
        "B. 108",
        "C. 119",
        "D. 109"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/19"
    },
    {
      square: 6,
      difficulty: "NEWT",
      question: "Nguyên tố hoá học có kí hiệu Na là",
      options: [
        "A. sodium",
        "B. nitrogen",
        "C. neon",
        "D. calcium"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/20"
    },
    {
      square: 7,
      difficulty: "OWL",
      question: "Loại hạt nào sau đây đặc trưng cho một nguyên tố hóa học?",
      options: [
        "A. Hạt neutron",
        "B. Hạt proton",
        "C. Hạt electron",
        "D. Hạt proton và neutron"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/18"
    },
    {
      square: 9,
      difficulty: "WOMBAT",
      question: "Nguyên tố hoá học tham gia trong cấu tạo của xương và răng của người và động vật là",
      options: [
        "A. calcium",
        "B. sodium",
        "C. magnesium",
        "D. potassium"
      ],
      answer: "A",
      explanation: "Calcium tham gia cấu tạo xương và răng, giúp chúng chắc khỏe"
    },
    {
      square: 11,
      difficulty: "NEWT",
      question: "Số hiệu nguyên tử của calcium là 12. Số hạt mang điện trong nguyên tử calcium là",
      options: [
        "A. 12",
        "B. 24",
        "C. 36",
        "D. 6"
      ],
      answer: "B",
      explanation: "Số hạt mang điện: p + e = 2p = 2 x 12 = 24"
    },
    {
      square: 13,
      difficulty: "WOMBAT",
      question: "Cơ thể thiếu hụt nguyên tố Iodine có thể gây ra tình trạng nào sau đây?",
      options: [
        "A. Bướu cổ",
        "B. Thiếu máu",
        "C. Hạ đường huyết",
        "D. Béo phì"
      ],
      answer: "A",
      explanation: "Iodine là một nguyên tố vi lượng cần thiết cho sự phát triển thể chất, tinh thần và giúp điều hòa chuyển hóa năng lượng, ngăn ngừa bệnh bướu cổ ở người."
    },
    {
      square: 14,
      difficulty: "WOMBAT",
      question: "Nguyên tố nào sau đây có chức năng cùng với Calcium cấu tạo nên xương, răng, chiếm khoảng 1% khối lượng cơ thể người?",
      options: [
        "A. Magnesium",
        "B. Sodium",
        "C. Phosphorus",
        "D. Iron"
      ],
      answer: "C",
      explanation: "Phosphorus chiếm khoảng 1% khối lượng cơ thể người, ngoài kết hợp với Calcium cấu tạo nên xương răng còn tham gia cấu tạo tế bào."
    },
    {
      square: 16,
      difficulty: "NEWT",
      question: "Kí hiệu hóa học nào sau đây viết sai?",
      options: [
        "A. Ca",
        "B. H",
        "C. MG",
        "D. Na"
      ],
      answer: "C",
      explanation: "Kí hiệu MG là sai, phải viết lại là Mg. Nguyên tố được biểu diễn bằng 2 chữ cái: In hoa chữ cái đầu tiên"
    },
    {
      square: 18,
      difficulty: "WOMBAT",
      question: "Qua tìm hiểu thực tế, hãy cho biết nguyên tố nào chỉ cần cung cấp một lượng rất nhỏ cho cây nhưng khi thiếu hụt cây sẽ chậm phát triển?",
      options: [
        "A. Potassium (K)",
        "B. Nitrogen (N)",
        "C. Phosphorus (P)",
        "D. Copper - Đồng (Cu)"
      ],
      answer: "D",
      explanation: "Nitrogen (N), Phosphorus (P), Potassium (K) là những nguyên tố cần cung cấp số lượng lớn cho cây. Tuy nhiên, cây cũng cần những nguyên tố khác như Copper (Cu), Magnesium (Mg) với lượng rất nhỏ."
    }
  ],

  // BÀI 4: SƠ LƯỢC BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC (Periodic Table)
  lesson4: [
    {
      square: 2,
      difficulty: "OWL",
      question: "Hãy cho biết cơ sở chính để sắp xếp các nguyên tố hóa học vào bảng tuần hoàn?",
      options: [
        "A. Điện tích hạt nhân nguyên tử",
        "B. Khối lượng nguyên tử",
        "C. Tổng số hạt trong nguyên tử",
        "D. Số neutron trong hạt nhân"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/22"
    },
    {
      square: 3,
      difficulty: "OWL",
      question: "Bảng tuần hoàn các nguyên tố hóa học gồm những thành phần nào?",
      options: [
        "A. Ô, hàng, cột",
        "B. Ô nguyên tố, chu kì, nhóm",
        "C. Ô nguyên tố",
        "D. Chu kì, nhóm"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/23"
    },
    {
      square: 4,
      difficulty: "NEWT",
      question: "Cho 4 nguyên tố hóa học sau đây: Oxygen (có 8p), Carbon (có 6p), Fluorine (có 9p), Nitrogen (có 7p). Theo chiều từ trái sang phải của bảng tuần hoàn, nguyên tố được xếp đầu tiên là",
      options: [
        "A. Carbon",
        "B. Nitrogen",
        "C. Oxygen",
        "D. Fluorine"
      ],
      answer: "A",
      explanation: "Số proton tương ứng với điện tích hạt nhân nguyên tử, thứ tự tăng dần: Carbon < Nitrogen < Oxygen < Fluorine. Carbon được xếp vào trước tiên trong bảng tuần hoàn."
    },
    {
      square: 5,
      difficulty: "OWL",
      question: "Trong bảng tuần hoàn, các nguyên tố hóa học có cùng số lớp electron trong nguyên tử được xếp vào:",
      options: [
        "A. 1 ô",
        "B. 1 hàng",
        "C. 1 cột",
        "D. 1 bảng"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/23"
    },
    {
      square: 6,
      difficulty: "NEWT",
      question: "Trong bảng tuần hoàn, magnesium nằm ở ô thứ 12. Số hạt electron trong nguyên tử magnesium là",
      options: [
        "A. 6",
        "B. 3",
        "C. 12",
        "D. 18"
      ],
      answer: "C",
      explanation: "Số thứ tự của nguyên tố = điện tích hạt nhân nguyên tử = số proton = số electron trong nguyên tử = 12"
    },
    {
      square: 7,
      difficulty: "OWL",
      question: "Trong bảng tuần hoàn, các nguyên tố khí hiếm nằm ở nhóm",
      options: [
        "A. IA",
        "B. IIA",
        "C. VIIA",
        "D. VIIIA"
      ],
      answer: "D",
      explanation: "Lí thuyết SGK - CTST/29"
    },
    {
      square: 9,
      difficulty: "WOMBAT",
      question: "Vào những dịp Tết hay lễ hội ở một số thành phố hoặc khu vui chơi giải trí, chúng ta thường nhìn thấy những khinh khí cầu đủ màu sắc bay trên bầu trời. Theo bạn, người ta đã bơm khí nào sau đây vào khinh khí cầu?",
      options: [
        "A. Hydrogen",
        "B. Oxygen",
        "C. Helium",
        "D. Nitrogen"
      ],
      answer: "C",
      explanation: "Helium là khí hiếm, nhẹ, không gây cháy nổ nên người ta bơm vào khinh khí cầu để khinh khí cầu có thể bay lên."
    },
    {
      square: 11,
      difficulty: "NEWT",
      question: "Sodium nằm ở chu kì 3 trong bảng tuần hoàn. Nguyên tử sodium có số lớp electron là",
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      answer: "C",
      explanation: "Số thứ tự của chu kì = số lớp electron trong nguyên tử = 3."
    },
    {
      square: 13,
      difficulty: "WOMBAT",
      question: "Nguyên tố nào thuộc nhóm VIA của bảng tuần hoàn rất cần thiết cho hoạt động hô hấp của con người?",
      options: [
        "A. Oxygen",
        "B. Sulfur",
        "C. Fluorine",
        "D. Chlorine"
      ],
      answer: "A",
      explanation: "Oxygen là khí rất cần cho hoạt động hô hấp của con người. Nguyên tố này có vị trí trong bảng tuần hoàn ở ô số 8, chu kì 2, nhóm VIA."
    },
    {
      square: 14,
      difficulty: "WOMBAT",
      question: "Nguyên tố nào được sử dụng trong thuốc tẩy gia dụng?",
      options: [
        "A. Iodine",
        "B. Bromine",
        "C. Chlorine",
        "D. Fluorine"
      ],
      answer: "C",
      explanation: "Là thành phần hoạt tính chính trong hầu hết các loại thuốc tẩy gia dụng phổ biến. Nó có thể tẩy màu, tiêu diệt vi khuẩn, virus và nấm mốc."
    },
    {
      square: 16,
      difficulty: "NEWT",
      question: "Cho các phát biểu sau về bảng tuần hoàn, phát biểu nào sau đây là không đúng?",
      options: [
        "A. Các nguyên tố phi kim tập trung ở các nhóm VA, VIA, VIIA",
        "B. Các nguyên tố khí hiếm nằm ở nhóm VIIIA",
        "C. Các nguyên tố kim loại có mặt ở tất cả các nhóm trong bảng tuần hoàn",
        "D. Các nguyên tố lanthanide và actinide, mỗi họ gồm 14 nguyên tố được xếp riêng thành hai dãy ở cuối bảng"
      ],
      answer: "C",
      explanation: "Các nguyên tố kim loại có mặt ở một số nguyên tố nhóm A và tất cả nguyên tố nhóm B, không phải tất cả các nhóm trong bảng tuần hoàn."
    },
    {
      square: 18,
      difficulty: "WOMBAT",
      question: "Nguyên tử của nguyên tố X có 3 lớp electron, lớp electron ngoài cùng có 2 electron. Vị trí của nguyên tố X là",
      options: [
        "A. Thuộc chu kỳ 3, nhóm VIA",
        "B. Thuộc chu kỳ 3, nhóm IIA",
        "C. Thuộc chu kỳ 2, nhóm IIIA",
        "D. Thuộc chu kỳ 2, nhóm VIA"
      ],
      answer: "B",
      explanation: "Số lớp electron = số thứ tự chu kì = 3. Số electron lớp ngoài cùng tương ứng với số thứ tự nhóm A → X thuộc nhóm IIA. ⇒ X thuộc chu kì 3, nhóm IIA."
    }
  ],

  // BÀI 5: PHÂN TỬ - ĐƠN CHẤT - HỢP CHẤT (Molecules - Elements - Compounds)
  lesson5: [
    {
      square: 2,
      difficulty: "OWL",
      question: "Phân tử là",
      options: [
        "A. sự kết hợp giữa một số nguyên tử với nhau và mang đầy đủ tính chất của chất",
        "B. hạt đại diện cho hợp chất, được tạo bởi nhiều nguyên tố hóa học",
        "C. hạt đại diện cho chất, được tạo bởi một nguyên tố hóa học",
        "D. hạt nhỏ nhất do các nguyên tố hóa học kết hợp với nhau tạo thành chất"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/31"
    },
    {
      square: 3,
      difficulty: "OWL",
      question: "Đơn chất là những chất được tạo nên từ bao nhiêu nguyên tố hóa học?",
      options: [
        "A. 1 nguyên tố",
        "B. 2 nguyên tố",
        "C. 3 nguyên tố trở lên",
        "D. 4 nguyên tố"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/34"
    },
    {
      square: 4,
      difficulty: "NEWT",
      question: "Phân tử chlorine được cấu tạo từ 2 nguyên tử chlorine. Biết khối lượng nguyên tử chlorine là 35,5 amu. Khối lượng phân tử chlorine là",
      options: [
        "A. 71 amu",
        "B. 35,5 amu",
        "C. 17,25 amu",
        "D. 36 amu"
      ],
      answer: "A",
      explanation: "Khối lượng phân tử chlorine là: 2 x 35,5 = 71 amu"
    },
    {
      square: 5,
      difficulty: "OWL",
      question: "Chất được phân chia thành hai loại lớn là (1) và (2). Đơn chất được tạo nên từ một nguyên tố hóa học, còn (3) được tạo nên từ hai nguyên tố hóa học trở lên. (1), (2), (3) lần lượt là:",
      options: [
        "A. Phân tử, đơn chất, hợp chất",
        "B. Phân tử, hợp chất, hợp chất",
        "C. Đơn chất, hợp chất, hợp chất",
        "D. Đơn chất, hợp chất, đơn chất"
      ],
      answer: "C",
      explanation: "Chất được phân chia thành hai loại lớn là đơn chất và hợp chất. Đơn chất được tạo nên từ một nguyên tố hóa học, còn hợp chất được tạo nên từ hai nguyên tố hóa học trở lên."
    },
    {
      square: 6,
      difficulty: "NEWT",
      question: "Cho các chất sau: Đường kính, muối ăn, sắt, khí hydrogen, thuỷ tinh. Số đơn chất trong dãy các chất trên là",
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      answer: "B",
      explanation: "Các đơn chất trong dãy chất trên là: Sắt (được tạo từ nhiều nguyên tử Fe) và khí hydrogen (được tạo từ 2 nguyên tử H)."
    },
    {
      square: 7,
      difficulty: "OWL",
      question: "Hợp chất là",
      options: [
        "A. chất tạo từ 2 nguyên tố hóa học",
        "B. chất tạo từ 2 hay nhiều nguyên tố hóa học",
        "C. chất tạo từ 2 nguyên tố kim loại trở lên",
        "D. chất tạo từ các nguyên tố kim loại và nguyên tố phi kim"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/35"
    },
    {
      square: 9,
      difficulty: "WOMBAT",
      question: "Quan sát hình mô phỏng các chất sau, cho biết là đơn chất",
      options: [
        "A. Hydrogen",
        "B. Water",
        "C. Carbon dioxide",
        "D. Ammonia"
      ],
      answer: "A",
      explanation: "Qua hình mô phỏng các chất sau, ta có thể thấy rằng chỉ hydrogen được cấu tạo từ 1 nguyên tố (đơn chất), còn lại đều từ 2 nguyên tố (hợp chất)."
    },
    {
      square: 11,
      difficulty: "NEWT",
      question: "Cho các phân tử sau: CO2, H2O, NaCl, O2. Phân tử có khối lượng lớn nhất là",
      options: [
        "A. CO2",
        "B. H2O",
        "C. NaCl",
        "D. O2"
      ],
      answer: "C",
      explanation: "Khối lượng phân tử: CO2 = 44 amu, H2O = 18 amu, NaCl = 58,5 amu, O2 = 32 amu."
    },
    {
      square: 13,
      difficulty: "WOMBAT",
      question: "Lõi dây điện bằng đồng chứa",
      options: [
        "A. các phân tử Cu",
        "B. các nguyên tử Cu riêng rẽ không liên kết với nhau",
        "C. rất nhiều nguyên tử Cu liên kết với nhau",
        "D. một nguyên tử Cu"
      ],
      answer: "C",
      explanation: "Với các đơn chất kim loại như đồng, các nguyên tử sắp xếp khít nhau, hay liên kết chặt chẽ với nhau theo một trật tự xác định và có vai trò như phân tử."
    },
    {
      square: 14,
      difficulty: "WOMBAT",
      question: "Cho các phát biểu sau, phát biểu sai về kim cương?",
      options: [
        "A. Kim cương là kim loại",
        "B. Kim cương là phi kim",
        "C. Kim cương được dùng làm trang sức",
        "D. Kim cương được cấu tạo từ cùng loại nguyên tố với than chì"
      ],
      answer: "A",
      explanation: "Kim cương – một phụ kiện trang sức quý giá được tạo nên từ nguyên tố Carbon (C), một phi kim đồng thời là nguyên tố cấu tạo nên than chì. Vì thế, kim cương không phải là kim loại."
    },
    {
      square: 16,
      difficulty: "NEWT",
      question: "Trong phân tử nước, cứ 16,0 g oxygen có tương ứng 2,0 g hydrogen. Một giọt nước chứa 0,1 g hydrogen thì khối lượng của oxygen có trong giọt nước đó là",
      options: [
        "A. 1,6 g",
        "B. 1,2 g",
        "C. 0,9 g",
        "D. 0,8 g"
      ],
      answer: "D",
      explanation: "Cứ 16,0 g oxygen có tương ứng 2,0 g hydrogen, do đó khối lượng oxygen trong nước lớn gấp 8 lần khối lượng hydrogen. ⇒ Khối lượng của oxygen trong giọt nước đó: 8 x 0,1 = 0,8 (g)."
    },
    {
      square: 18,
      difficulty: "WOMBAT",
      question: "Đồng được sử dụng làm dây dẫn điện do tính chất",
      options: [
        "A. Dẫn điện tốt",
        "B. Cách điện tốt",
        "C. Dẫn nhiệt tốt",
        "D. Dẻo khi bị biến dạng"
      ],
      answer: "A",
      explanation: "Các đơn chất kim loại như đồng có tính dẫn điện tốt do đó có thể dùng làm dây dẫn điện."
    }
  ],

  // BÀI 6: GIỚI THIỆU VỀ LIÊN KẾT HÓA HỌC (Chemical Bonds)
  lesson6: [
    {
      square: 2,
      difficulty: "OWL",
      question: "Số electron ở lớp ngoài cùng của nguyên tử khí hiếm (trừ He) là",
      options: [
        "A. 1",
        "B. 3",
        "C. 5",
        "D. 8"
      ],
      answer: "D",
      explanation: "Lí thuyết SGK - CTST/37"
    },
    {
      square: 3,
      difficulty: "OWL",
      question: "Liên kết cộng hóa trị được hình thành do",
      options: [
        "A. lực hút tĩnh điện yếu giữa các nguyên tử",
        "B. các cặp electron dùng chung",
        "C. các đám mây electron",
        "D. các electron hoá trị"
      ],
      answer: "B",
      explanation: "Lí thuyết SGK - CTST/41"
    },
    {
      square: 4,
      difficulty: "NEWT",
      question: "Trong phân tử sodium chloride, nguyên tử Na và nguyên tử Cl liên kết với nhau bằng liên kết",
      options: [
        "A. cộng hóa trị",
        "B. ion",
        "C. kim loại",
        "D. phi kim"
      ],
      answer: "B",
      explanation: "Trong quá trình hình thành liên kết trong phân tử sodium chloride, Na nhường 1e tạo ion Na+, Cl nhận 1e tạo ion Cl-, 2 ion này mang điện tích trái dấu nên hút nhau, tạo thành liên kết ion."
    },
    {
      square: 5,
      difficulty: "OWL",
      question: "Ở điều kiện thường, phát biểu nào sau đây không chính xác?",
      options: [
        "A. Hợp chất chỉ có liên kết cộng hóa trị là chất cộng hóa trị",
        "B. Hợp chất chỉ có liên kết ion là chất ion",
        "C. Một số hợp chất có cả liên kết ion và liên kết cộng hóa trị",
        "D. Ở điều kiện thường, hợp chất ở thể rắn là chất ion"
      ],
      answer: "D",
      explanation: "Chất ion ở thể rắn nhưng chưa chắc chất ở thể rắn là chất ion vì chất cộng hóa trị cũng có thể ở thể rắn như đường tinh luyện."
    },
    {
      square: 6,
      difficulty: "NEWT",
      question: "Chất nào sau đây không phải là hợp chất cộng hóa trị?",
      options: [
        "A. Sulfur dioxide",
        "B. Carbon dioxide",
        "C. Sodium chloride",
        "D. Nước"
      ],
      answer: "C",
      explanation: "Phân tử sodium chloride được tạo từ ion Na+ và ion Cl-, do đó sodium chloride là chất ion."
    },
    {
      square: 7,
      difficulty: "OWL",
      question: "Phát biểu nào sau đây là đúng về chất ion?",
      options: [
        "A. Chất ion là chất được tạo bởi các ion dương và ion âm",
        "B. Ở điều kiện thường, chất ion thường ở thể rắn, lỏng, khí",
        "C. Chất ion dễ bay hơi, kém bền nhiệt",
        "D. Chất ion không tan được trong nước"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/42"
    },
    {
      square: 9,
      difficulty: "WOMBAT",
      question: "Chất nào sau đây là chất cộng hóa trị?",
      options: [
        "A. Potassium chloride",
        "B. Sodium fluoride",
        "C. Magnesium oxide",
        "D. Đường tinh luyện (saccharose)"
      ],
      answer: "D",
      explanation: "Trong phân tử đường tinh luyện không có liên kết giữa ion dương và ion âm mà chỉ có liên kết cộng hóa trị nên đây là hợp chất cộng hóa trị giữa các nguyên tử C, H, O."
    },
    {
      square: 11,
      difficulty: "NEWT",
      question: "Dãy các hợp chất có nhiệt độ nóng chảy và nhiệt độ sôi thấp là",
      options: [
        "A. Nước, khí ammonia, khí carbon dioxide",
        "B. Nước, muối ăn, khí ammonia",
        "C. Magnesium oxide, nước, khí carbon dioxide",
        "D. Muối ăn, khí ammonia, khí carbon dioxide"
      ],
      answer: "A",
      explanation: "Các hợp chất gồm: Nước, khí ammonia, khí carbon dioxide là các chất cộng hóa trị, do đó chúng dễ bay hơi, kém bền với nhiệt, do đó có nhiệt độ nóng chảy và nhiệt độ sôi thấp."
    },
    {
      square: 13,
      difficulty: "WOMBAT",
      question: "Số cặp electron dùng chung giữa các nguyên tử trong phân tử carbon dioxide là",
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      answer: "D",
      explanation: "Carbon dioxide gồm 1 nguyên tử C liên kết với 2 nguyên tử O. Mỗi nguyên tử O dùng chung 2 cặp e với nguyên tử C nên số cặp electron dùng chung trong phân tử carbon dioxide là 4."
    },
    {
      square: 14,
      difficulty: "WOMBAT",
      question: "Cho các phân tử sau: Calcium chloride, sulfur dioxide, khí nitrogen, khí chlorine, nước. Số phân tử có chứa liên kết cộng hoá trị là",
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      answer: "D",
      explanation: "Giữa các nguyên tử trong phân tử sulfur dioxide (S và O), khí nitrogen (2 nguyên tử N), khí chlorine (2 nguyên tử Cl) và nước (H và O) liên kết với nhau bằng liên kết cộng hóa trị."
    },
    {
      square: 16,
      difficulty: "NEWT",
      question: "Nhóm hợp chất nào sau đây đều là hợp chất ion?",
      options: [
        "A. Hydrogen sulfide, sodium oxide",
        "B. Methane, carbon dioxide",
        "C. Calcium oxide, potassium chloride",
        "D. Nitrogen dioxide, Sulfur trioxide"
      ],
      answer: "C",
      explanation: "Trong phân tử calcium oxide, ion Ca2+ liên kết với ion O2-. Trong phân tử potassium chloride, ion K+ liên kết với ion Cl-."
    },
    {
      square: 18,
      difficulty: "WOMBAT",
      question: "Khí methane là thành phần chính của khí thiên nhiên và khí mỏ dầu. Liên kết trong phân tử methane là liên kết gì?",
      options: [
        "A. Phi kim",
        "B. Kim loại",
        "C. Ion",
        "D. Cộng hóa trị"
      ],
      answer: "D",
      explanation: "Liên kết trong phân tử methane là liên kết cộng hóa trị giữa nguyên tử C và 4 nguyên tử H."
    }
  ],

  // BÀI 7: HÓA TRỊ VÀ CÔNG THỨC HÓA HỌC (Valence and Chemical Formulas)
  lesson7: [
    {
      square: 2,
      difficulty: "OWL",
      question: "Khi xác định hóa trị, hóa trị của nguyên tố nào được lấy làm đơn vị?",
      options: [
        "A. Hydrogen",
        "B. Sulfur",
        "C. Nitrogen",
        "D. Carbon"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/46"
    },
    {
      square: 3,
      difficulty: "OWL",
      question: "Trong hợp chất, nguyên tố hydrogen thường có hóa trị là bao nhiêu?",
      options: [
        "A. I",
        "B. II",
        "C. III",
        "D. IV"
      ],
      answer: "A",
      explanation: "Lí thuyết SGK - CTST/46"
    },
    {
      square: 4,
      difficulty: "NEWT",
      question: "Phát biểu nào sau đây không đúng?",
      options: [
        "A. Công thức hoá học cho biết số nguyên tử của các nguyên tố có trong phân tử của chất",
        "B. Công thức hoá học cho biết các nguyên tố tạo nên chất",
        "C. Công thức hoá học cho ta biết được khối lượng phân tử của chất",
        "D. Công thức hoá học cho biết được trật tự liên kết giữa các nguyên tử trong phân tử"
      ],
      answer: "D",
      explanation: "Lí thuyết SGK - CTST/48"
    },
    {
      square: 5,
      difficulty: "OWL",
      question: "Hóa trị của các nguyên tố sau: O, Na, Al trong hợp chất lần lượt là",
      options: [
        "A. I, II, III",
        "B. III, II, I",
        "C. II, I, III",
        "D. II, III, I"
      ],
      answer: "C",
      explanation: "Bảng 7.1 - SGK - CTST/46"
    },
    {
      square: 6,
      difficulty: "NEWT",
      question: "Hoá trị của nitrogen trong hợp chất N2O5 là",
      options: [
        "A. V",
        "B. IV",
        "C. III",
        "D. II"
      ],
      answer: "A",
      explanation: "Hoá trị của oxygen là II. Đặt hóa trị của N là a. Theo quy tắc hóa trị ta có: 2 x a = 5 x II ⇒ a = V"
    },
    {
      square: 7,
      difficulty: "OWL",
      question: "Một phân tử của hợp chất carbon dioxide chứa một nguyên tử carbon và hai nguyên tử oxygen. Công thức hóa học của hợp chất carbon dioxide là",
      options: [
        "A. NO2",
        "B. CO2",
        "C. SO2",
        "D. H2O"
      ],
      answer: "B",
      explanation: "Công thức hóa học của hợp chất carbon dioxide chứa 1 nguyên tử carbon và 2 nguyên tử oxygen là CO2."
    },
    {
      square: 9,
      difficulty: "WOMBAT",
      question: "Nguyên tố N chiếm 46,67% trong công thức hóa học nào sau đây?",
      options: [
        "A. N2O5",
        "B. NO2",
        "C. NO",
        "D. N2O3"
      ],
      answer: "C",
      explanation: "NO có tỉ lệ phần trăm N là: (14/(14+16)) x 100% = 46,67%"
    },
    {
      square: 11,
      difficulty: "NEWT",
      question: "Nguyên tố X có hoá trị III trong các hợp chất, công thức hóa học của X với nhóm sulfate là",
      options: [
        "A. XSO4",
        "B. X3SO4",
        "C. X2(SO4)3",
        "D. X3(SO4)2"
      ],
      answer: "C",
      explanation: "Nhóm sulfate (SO4) có hóa trị II. Theo quy tắc hóa trị: III x a = II x b → a = 2, b = 3. Công thức muối: X2(SO4)3"
    },
    {
      square: 13,
      difficulty: "WOMBAT",
      question: "Hematite là một loại quặng sắt có chứa Fe2O3. Hàm lượng của sắt trong Fe2O3 là",
      options: [
        "A. 70%",
        "B. 60%",
        "C. 50%",
        "D. 80%"
      ],
      answer: "A",
      explanation: "Hàm lượng sắt = (56x2)/(56x2+16x3) x 100% = 112/160 x 100% = 70%"
    },
    {
      square: 14,
      difficulty: "WOMBAT",
      question: "Bột thạch cao có nhiều ứng dụng quan trọng trong đời sống. Bột thạch cao là hợp chất cấu tạo từ nguyên tố calcium và gốc sulfate. Xác định công thức hóa học của bột thạch cao?",
      options: [
        "A. Ca2SO4",
        "B. Ca(SO4)2",
        "C. Ca3(SO4)2",
        "D. CaSO4"
      ],
      answer: "D",
      explanation: "Cả nguyên tử Ca và gốc sulfate (SO4) đều có hóa trị II. Theo quy tắc hóa trị công thức là CaSO4"
    },
    {
      square: 16,
      difficulty: "NEWT",
      question: "Cho biết công thức hóa học của hợp chất tạo bởi sulfur và oxygen, trong đó sulfur chiếm 40% về khối lượng còn lại là oxygen, biết khối lượng phân tử của hợp chất là 80 amu?",
      options: [
        "A. SO2",
        "B. SO3",
        "C. SO4",
        "D. S2O3"
      ],
      answer: "B",
      explanation: "Khối lượng S = 80 x 40% = 32 amu (1 nguyên tử S). Khối lượng O = 80 x 60% = 48 amu (3 nguyên tử O). Công thức: SO3"
    },
    {
      square: 18,
      difficulty: "WOMBAT",
      question: "Thạch nhũ trong hang động có thành phần chính là hợp chất (T). Phân tử (T) có cấu tạo từ nguyên tố calcium, carbon và oxygen với các tỉ lệ phần trăm tương ứng là 40%, 12% và 48%. Khối lượng phân tử (T) là 100 amu. Hãy xác định công thức hóa học của (T)?",
      options: [
        "A. CaCO2",
        "B. CaC3O",
        "C. CaCO",
        "D. CaCO3"
      ],
      answer: "D",
      explanation: "Ca: 100x40%=40 (1 nguyên tử Ca). C: 100x12%=12 (1 nguyên tử C). O: 100x48%=48 (3 nguyên tử O). Công thức: CaCO3"
    }
  ]
};

// Helper function to get questions for a specific lesson and square
export const getQuestionByLessonAndSquare = (lesson, square) => {
  const lessonKey = `lesson${lesson}`;
  if (!questions[lessonKey]) return null;
  return questions[lessonKey].find(q => q.square === square);
};

// Helper function to get all questions for a lesson
export const getQuestionsByLesson = (lesson) => {
  const lessonKey = `lesson${lesson}`;
  return questions[lessonKey] || [];
};

// Get random question by difficulty
export const getRandomQuestionByDifficulty = (lesson, difficulty) => {
  const lessonQuestions = getQuestionsByLesson(lesson);
  const filteredQuestions = lessonQuestions.filter(q => q.difficulty === difficulty);
  if (filteredQuestions.length === 0) return null;
  return filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
};
