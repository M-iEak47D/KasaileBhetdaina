<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\FlashCard\FlashCardResource;
use App\Model\FlashCard;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FlashCardController extends Controller
{
    public function index(){

        $flashcards = FlashCard::where('status', 1)->get();
        return FlashCardResource::collection($flashcards);
    }
}
