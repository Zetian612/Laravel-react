<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TransferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description' => $this->faker->text($maxNbChars = 100),
            'amount' => $this->faker->numberBetween(10,90),
            'wallet_id' => $this->faker->randomDigitNotNull,
        ];
    }
}
