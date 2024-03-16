<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpOffice\PhpWord\IOFactory;

class FileConversionController extends Controller
{
    public function convertToPDF(Request $request)
    {
        // Validate input
        $request->validate([
            'file' => 'required|mimes:doc,docx',
        ]);

        $file = $request->file('file');
        
        // Load the DOC file
        $phpWord = IOFactory::load($file);

        // Save as PDF
        $pdfFilePath = storage_path('app/' . $file->getClientOriginalName() . '.pdf');
        $pdfWriter = IOFactory::createWriter($phpWord, 'PDF');
        $pdfWriter->save($pdfFilePath);

        // Return the path to the PDF
        return response()->json(['pdf_path' => $pdfFilePath]);
    }
}
