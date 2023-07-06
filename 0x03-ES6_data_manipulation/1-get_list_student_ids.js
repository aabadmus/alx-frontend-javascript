export default getListStudentIds (ARR)	{
	if (!Array.isArray(ARR))	{
		return [];
	}
	return ARR.map((student) => student.id);
}
