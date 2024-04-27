export default function StudentStatusOverall({ studentStatusOverall }) {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r from-red-1 to-red-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-white">
              หน่วยกิตสะสม{" "}
              {studentStatusOverall.cumCredit
                ? studentStatusOverall.cumCredit
                : 0}
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r from-green-1 to-green-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-white">
              est-score{" "}
              {studentStatusOverall.estScore
                ? studentStatusOverall.estScore
                : 0}
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r from-green-1 to-green-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-white">
              เกรดเฉลี่ย{" "}
              {studentStatusOverall.cumGpa ? studentStatusOverall.cumGpa : 0}
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r from-red-1 to-red-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-white">
              ชั่วโมงกิจกรรม{" "}
              {studentStatusOverall.cumActHour
                ? studentStatusOverall.cumActHour
                : 0}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
