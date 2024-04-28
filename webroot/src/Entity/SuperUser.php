<?php

namespace App\Entity;

use App\Repository\SuperUserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SuperUserRepository::class)]
class SuperUser extends User
{
}
