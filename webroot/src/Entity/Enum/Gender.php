<?php

namespace App\Entity\Enum;

class Gender
{
    public const MALE = 'Monsieur';
    public const FEMALE = 'Madame';

    /**
     * @return array<string, string>
     */
    public static function getChoices(): array
    {
        return [
            self::MALE => self::MALE,
            self::FEMALE => self::FEMALE,
        ];
    }
}
