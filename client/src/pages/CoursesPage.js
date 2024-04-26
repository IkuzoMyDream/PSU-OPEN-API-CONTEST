    import { NavBar } from "../components/navbar";
    import { axLOCAL } from "../utils/config/ax";
    import { localConfig } from "../utils/config/main";

    function CoursesPage() {
        return (
            <div>
                <NavBar />
            <div className="container mx-auto max-w-screen-lg px-4">
                
                <div className="flex justify-center">
                    <p className="text-2xl font-bold mt-4">หมวดหมู่รายวิชา</p>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center">
                    <div className="col">
                        <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                            <img src="https://img.pikbest.com/png-images/qiantu/retro-open-book-books-free-png_2513376.png!sw800" alt="หมวดรายวิชาทั่วไป" className="mx-auto mb-4 w-32 h-32" />
                            <h2 className="text-lg font-bold">หมวดรายวิชาทั่วไป</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                            <img src="https://img.pikbest.com/png-images/qiantu/retro-open-book-books-free-png_2513376.png!sw800" alt="หมวดรายวิชาเลือกเสรี" className="mx-auto mb-4 w-32 h-32" />
                            <h2 className="text-lg font-bold">หมวดรายวิชาเลือกเสรี</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                            <img src="https://img.pikbest.com/png-images/qiantu/retro-open-book-books-free-png_2513376.png!sw800" alt="หมวดรายวิชาเลือก" className="mx-auto mb-4 w-32 h-32" />
                            <h2 className="text-lg font-bold">หมวดรายวิชาเลือก</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bg-white p-4 rounded-lg shadow-md text-center h-full">
                            <img src="https://img.pikbest.com/png-images/qiantu/retro-open-book-books-free-png_2513376.png!sw800" alt="หมวดรายวิชาเฉพาะ" className="mx-auto mb-4 w-32 h-32" />
                            <h2 className="text-lg font-bold">หมวดรายวิชาเฉพาะ</h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

    export default CoursesPage;
