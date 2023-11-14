class ContactsController < ApplicationController
    require 'mail_form'
    def new
      @contact = Contact.new
    end

    def create
      @contact = Contact.new(contacts_params)
      @contact.request = request
      if @contact.deliver
        redirect_to new_contact_path, notice: "Message envoyé!"
        # flash[:message] = "Message envoyé!"
      else
        # flash.now[:error] = "Impossible d'envoyer le message, veuillez remplir tous les champs requis!"
        redirect_to new_contact_path, notice: "Impossible d'envoyer le message, veuillez remplir tous les champs requis!"
        # render :new, status: :unprocessable_entity
      end
    end

    private

    def contacts_params
      params.require(:contact).permit(:last_name, :email, :city, :phone_number, :message)
    end
end
