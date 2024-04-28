<?php

namespace App\Controller\Admin;

use App\Entity\SuperUser;
use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\HttpFoundation\Response;

/**
 * @extends CRUDController<SuperUser>
 */
class SuperUserAdminController extends CRUDController
{
    public function impersonateAction(int $id): Response
    {
        $object = $this->admin->getSubject();
        $user = $this->getUser();

        // Créer le log d'impersonation

        $url = $this->generateUrl('app_home_action', ['_switch_user' => $object->getEmail()]);

        return $this->redirect($url);
    }
}
