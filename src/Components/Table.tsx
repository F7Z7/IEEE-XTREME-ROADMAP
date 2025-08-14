import React, {useState} from 'react';
import Button from "./Button.tsx";

interface TableRow {
    slNo: number;
    authorNames: string;
    year: string;
    paperTitle: string;
    journalName: string;
    contentsRelatedToWork: string;
    merits: string;
    researchGap: string;
    remarks?: string;
}

const TablePage: React.FC = () => {
    const [rows, setRows] = useState<TableRow[]>([]);
    const [form, setForm] = useState<TableRow>({
        slNo: 1,
        authorNames: "",
        year: "",
        paperTitle: "",
        journalName: "",
        contentsRelatedToWork: "",
        merits: "",
        researchGap: "",
        remarks: "",
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    // Add row to table
    const handleAddData = () => {
        if (!form.authorNames || !form.paperTitle) return;

        const newRow = {
            ...form,
            slNo: rows.length + 1
        };

        setRows([...rows, newRow]);
        setForm({
            slNo: rows.length + 2,
            authorNames: "",
            year: "",
            paperTitle: "",
            journalName: "",
            contentsRelatedToWork: "",
            merits: "",
            researchGap: "",
            remarks: "",
        });
    };

    const handleClearData = () => {
        setForm({
            slNo: form.slNo + 1,
            authorNames: "",
            year: "",
            paperTitle: "",
            journalName: "",
            contentsRelatedToWork: "",
            merits: "",
            researchGap: "",
            remarks: "",
        });
        }
    const clearTable = () => {
        setRows([]);
    };
    const randomData=()=>{
        setForm({
            slNo: form.slNo + 1,
            authorNames: `Author ${Math.floor(Math.random() * 100)}`,
            year: `${2000 + Math.floor(Math.random() * 26)}`, // random year 2000–2025
            paperTitle: `Research on Topic ${Math.floor(Math.random() * 50)}`,
            journalName: `Journal ${Math.floor(Math.random() * 20)}`,
            contentsRelatedToWork: "Some interesting findings...",
            merits: "Fast, efficient, scalable",
            researchGap: "Needs more testing",
            remarks: "Randomly generated for testing",
        });
    }
    const downloadImage = () => {

    };
    return (
        <div className="p-6 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Literature Review Table</h1>
            <Button executeThis={randomData} text={"add random data"} bgColor={"bg-emerald-500 hover:bg-emerald-600"}/>
            {/* Form */}
            <div className="flex flex-col gap-4 w-full max-w-xl backdrop-blur-2xl mb-6 p-4 bg-gray-50 rounded-lg p-5 ">
                <input name="paperTitle" placeholder="Title" value={form.paperTitle} onChange={handleChange}
                       className="defaultStyle "/>
                <input name="authorNames" placeholder="Author Name" value={form.authorNames} onChange={handleChange}
                       className="defaultStyle"/>
                <input name="year" placeholder="Year" value={form.year} onChange={handleChange}
                       className="defaultStyle"/>
                <input name="journalName" placeholder="Journal" value={form.journalName} onChange={handleChange}
                       className="defaultStyle"/>
                <input name="contentsRelatedToWork" placeholder="Contents" value={form.contentsRelatedToWork}
                       onChange={handleChange} className="defaultStyle"/>
                <input name="merits" placeholder="Merits" value={form.merits} onChange={handleChange}
                       className="defaultStyle"/>
                <input name="researchGap" placeholder="Research Gap" value={form.researchGap} onChange={handleChange}
                       className="defaultStyle"/>
                <input name="remarks" placeholder="Remarks?" value={form.remarks} onChange={handleChange}
                       className="defaultStyle"/>

            </div>
            <div className="flex justify-center items-center gap-5 p-3 ">
                <Button executeThis={handleAddData} text={"Add Data"} bgColor={"bg-blue-500 hover:bg-blue-400"}/>
                <Button executeThis={handleClearData} text={"Clear Data"} bgColor={"bg-red-500 hover:bg-red-400"}/>
            </div>

            <div className="overflow-x-auto mt-6">
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-2 py-1">Sl. No</th>
                        <th className="border px-2 py-1">Author Names</th>
                        <th className="border px-2 py-1">Year</th>
                        <th className="border px-2 py-1">Paper Title</th>
                        <th className="border px-2 py-1">Journal Name</th>
                        <th className="border px-2 py-1">Contents Related to Work</th>
                        <th className="border px-2 py-1">Merits</th>
                        <th className="border px-2 py-1">Research Gap</th>
                        <th className="border px-2 py-1">Remarks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((row) => (
                        <tr key={row.slNo}>
                            <td className="border px-2 py-1">{row.slNo}</td>
                            <td className="border px-2 py-1">{row.authorNames}</td>
                            <td className="border px-2 py-1">{row.year}</td>
                            <td className="border px-2 py-1">{row.paperTitle}</td>
                            <td className="border px-2 py-1">{row.journalName}</td>
                            <td className="border px-2 py-1">{row.contentsRelatedToWork}</td>
                            <td className="border px-2 py-1">{row.merits}</td>
                            <td className="border px-2 py-1">{row.researchGap}</td>
                            <td className="border px-2 py-1">{row.remarks}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center gap-5 p-3 ">
                <Button executeThis={downloadImage} text={"Download Table"} bgColor={"bg-green-500 hover:bg-green-400"}/>
                <Button executeThis={clearTable} text={"Clear Table"} bgColor={"bg-red-500 hover:bg-red-400"}/>
            </div>
        </div>
    );
};

export default TablePage;