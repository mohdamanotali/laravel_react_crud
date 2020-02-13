<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Score;

class ScoreController extends Controller
{
    public function index() {
        $scores = Score::readScore();
        return $scores;
    }

    public function store(Request $request) {
        if($request->isMethod('post'))
            return Score::createScore($request->input());
        else
            return Score::updateScore($request->input());
    }

    public function destroy($id) {
        return Score::deleteScore($id);
    }
}
