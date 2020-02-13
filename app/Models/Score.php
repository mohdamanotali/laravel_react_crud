<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    protected $guarded = [];

    public static function readScore()
    {
        return Score::orderBy('updated_at', 'desc')->paginate(5);
    }

    public static function createScore($data)
    {
        return Score::create([
            'name' => $data['name'],
            'answeres' => $data['answeres'],
            'points' => $data['points'],
            'comments' => $data['comments']
        ]);
    }

    public static function updateScore($data)
    {
        return Score::where('id', $data['id'])->update([
            'name' => $data['name'],
            'answeres' => $data['answeres'],
            'points' => $data['points'],
            'comments' => $data['comments']
        ]);
    }

    public static function deleteScore($id)
    {
        return Score::where('id', $id)->delete();        
    }
}
