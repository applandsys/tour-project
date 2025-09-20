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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->integer('amount');
            $table->string('reward');
            $table->integer('limit');
            $table->integer('voucher_amount');
            $table->json('consume_date');
            $table->integer('voucher_per_month');
            $table->integer('claim_deadline');
            $table->longText('description');
            $table->longText('image');
            $table->text('gift');
            $table->json('extras')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
