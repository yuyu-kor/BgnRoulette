let isSpinning = false;

// 룰렛 칸을 숫자로 설정 (1~5) → 이미지에 맞춰 텍스트 매칭
const prizeTexts = {
    1: "안약 키트 증정 (인공눈물 또는 힐론 안약)",
    2: "온찜질 1회 권",
    3: "카페 그릿 음료 쿠폰 1매",
    4: "수술비 추가 3만 원 할인 (동반의 경우 포함)",
    5: "수술비 추가 5만 원 할인 (동반의 경우 포함)"
};

function startRoulette() {
    if (isSpinning) return;
    isSpinning = true;

    const roulette = document.getElementById("roulette");

    // 5등분 룰렛 -> 72도 간격, 5~6바퀴 랜덤 회전 추가
    let randomDegree = Math.floor(Math.random() * 360) + 1800; 
    
    roulette.style.transition = "transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    roulette.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        let finalAngle = randomDegree % 360;  // 0~360도 사이로 변환
        let sectionSize = 360 / 5;  // 5등분 = 72도씩 나눔
        let resultNumber = Math.floor(finalAngle / sectionSize) + 1;  // 1~5 범위로 변환

        alert(`🎉 당첨: ${prizeTexts[resultNumber]}`);
        isSpinning = false;
    }, 3000);
}
