<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\OptionController;
use App\Http\Controllers\QuizResultController;
use App\Http\Controllers\QuizAnswerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// quiz
Route::get('/quiz', [QuizController::class, 'index'])->name('quiz.index');

//questions
Route::get('/question', [QuestionController::class, 'index'])->name('question.index');

//options
Route::get('/option', [OptionController::class, 'index'])->name('option.index');

//QuizResultController
Route::get('/quizresult', [QuizResultController::class, 'index'])->name('quizresult.index');

//QuizAnswerController
Route::get('/quizanswer', [QuizAnswerController::class, 'index'])->name('option.index');