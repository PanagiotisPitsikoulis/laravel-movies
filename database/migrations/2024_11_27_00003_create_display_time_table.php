<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDisplayTimeTable extends Migration
{
    public function up()
    {
        Schema::create('display_time', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->unsignedBigInteger('room_id');
            $table->time('time_start');
            $table->time('time_end');
            $table->timestamps();

            $table->foreign('movie_id')->references('id')->on('movie')->onDelete('cascade');
            $table->foreign('room_id')->references('id')->on('room')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('display_time');
    }
}
