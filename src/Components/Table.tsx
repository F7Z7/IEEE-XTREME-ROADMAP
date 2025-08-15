import React, {useRef, useState} from 'react';
import Button from "./Button.tsx";
import {downloadTable} from "../utils/downloadTable.tsx";

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
    const exportRef = useRef<HTMLDivElement>(null);

    const downloadImage = async () => {
        if (exportRef.current) {
            await downloadTable(exportRef.current, "literature-review-table.png");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

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

    const randomData = () => {
        setForm({
            slNo: form.slNo + 1,
            authorNames: `Author ${Math.floor(Math.random() * 100)}`,
            year: `${2000 + Math.floor(Math.random() * 26)}`,
            paperTitle: `Research on Topic ${Math.floor(Math.random() * 50)}`,
            journalName: `Journal ${Math.floor(Math.random() * 20)}`,
            contentsRelatedToWork: "Some interesting findings...",
            merits: "Fast, efficient, scalable",
            researchGap: "Needs more testing",
            remarks: "Randomly generated for testing",
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Literature Review Table</h1>



                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <input
                        name="paperTitle"
                        placeholder="Paper Title *"
                        value={form.paperTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="authorNames"
                        placeholder="Author Names *"
                        value={form.authorNames}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="year"
                        placeholder="Year"
                        value={form.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="journalName"
                        placeholder="Journal Name"
                        value={form.journalName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="contentsRelatedToWork"
                        placeholder="Contents Related to Work"
                        value={form.contentsRelatedToWork}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="merits"
                        placeholder="Merits"
                        value={form.merits}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="researchGap"
                        placeholder="Research Gap"
                        value={form.researchGap}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                    <input
                        name="remarks"
                        placeholder="Remarks"
                        value={form.remarks}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>
                <div className="flex justify-center items-center gap-5 p-3">
                    <Button executeThis={handleAddData} text={"Add Data"} bgColor={"bg-blue-500 hover:bg-blue-400"}/>
                    <Button executeThis={handleClearData} text={"Clear Data"} bgColor={"bg-red-500 hover:bg-red-400"}/>
                    <Button executeThis={randomData} text={"Add Random Data"}
                            bgColor={"bg-emerald-500 hover:bg-emerald-600"}/>
                </div>

                <div className="overflow-x-auto w-full mt-6" ref={exportRef}>
                    <table className="myTable">
                        <thead className="tableHead">
                        <tr>
                            <th className="tableBorder text-xs sm:text-sm">Sl. No</th>
                            <th className="tableBorder text-xs sm:text-sm">Author Names</th>
                            <th className="tableBorder text-xs sm:text-sm">Year</th>
                            <th className="tableBorder text-xs sm:text-sm">Paper Title</th>
                            <th className="tableBorder text-xs sm:text-sm">Journal Name</th>
                            <th className="tableBorder text-xs sm:text-sm">Contents Related to Work</th>
                            <th className="tableBorder text-xs sm:text-sm">Merits</th>
                            <th className="tableBorder text-xs sm:text-sm">Research Gap</th>
                            <th className="tableBorder text-xs sm:text-sm">Remarks</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows.map((row) => (
                            <tr key={row.slNo}>
                                <td className="tableBorder text-xs sm:text-sm">{row.slNo}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.authorNames}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.year}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.paperTitle}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.journalName}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.contentsRelatedToWork}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.merits}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.researchGap}</td>
                                <td className="tableBorder text-xs sm:text-sm">{row.remarks}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center gap-5 p-3">
                    <Button executeThis={downloadImage} text={"Download Table"}
                            bgColor={"bg-green-500 hover:bg-green-400"}/>
                    <Button executeThis={clearTable} text={"Clear Table"} bgColor={"bg-red-500 hover:bg-red-400"}/>
                </div>
            </div>
        </div>
    );
};

export default TablePage;