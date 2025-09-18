<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rand_rewards', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug");
            $table->tinyInteger("rank_level");
            $table->integer("required_amount");
            $table->integer("instant_bonus");
            $table->string("alternative_bonus");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rand_rewards');
    }
};
