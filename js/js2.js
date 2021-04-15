function showHistoryData() {
	lastIndex = bmiHistoryData.length - 1;
    abbData = bmiHistoryData[lastIndex];
	console.log(
		`總共計算 ${lastIndex+1} 次 BMI 紀錄，最後一次 BMI 指數為 ${abbData.bmi}，體重${abbData.state}！健康指數為${abbData.color}！`
	);
}