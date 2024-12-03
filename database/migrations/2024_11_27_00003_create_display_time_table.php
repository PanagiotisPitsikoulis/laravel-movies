<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDisplayTimeTable extends Migration
{
    public function up()
    {
        Schema::create('display_times', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->unsignedBigInteger('movie_id'); // Foreign key column
            $table->time('time_start'); // Showtime start
            $table->time('time_end'); // Showtime end
            $table->timestamps(); // created_at and updated_at

            // Foreign key constraint
            $table->foreign('movie_id')
                ->references('id')
                ->on('movies')
                ->onDelete('cascade');
        });
    }

    public function down()
    {
        // Drop the table `display_times`
        Schema::dropIfExists('display_times');
    }
}
